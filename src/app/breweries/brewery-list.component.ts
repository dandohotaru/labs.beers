import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { Query } from "app/shared/filters/query.models";

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit, OnDestroy {

  term: string;
  data: BreweryData[] = [];
  breweries: BreweryData[] = [];
  selection: BreweryData;
  queries: Query<BreweryData>[] = [];

  yearsOptions: { value: number, text: string, disabled?: boolean }[] = [];
  afterOptions: { value: number, text: string, disabled?: boolean }[] = [];
  beforeOptions: { value: number, text: string, disabled?: boolean }[] = [];
  lettersOptions: { value: string, text: string, disabled?: boolean }[] = [];
  lengthOptions: { value: number, text: string, disabled?: boolean }[] = [];

  @Output()
  loaded: EventEmitter<{ found: number }> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BreweriesService,
    private mediator: EventAggregator) {
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.term = params["q"] && params["q"][0]
        ? params["q"][0]
        : "";

      var breweries = this.service
        .search(this.term)
        .subscribe(response => {

          // Data
          this.data = response;
          this.queries.push({
            name: "yearFound",
            predicate: (model) => model.established != null
          })
          this.build();
          this.refresh();

          // Loaded
          this.loaded.emit({ found: this.breweries.length });
        },
        error => {
          console.error(error);
        });
    });

    this.mediator.subscribe("yearChanged", event => {
      this.append("yearChanged", (item: BreweryData) => {
        return item.established == event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("yearCleared", event => {
      this.detach("yearChanged");
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("afterChanged", event => {
      this.append("afterChanged", (item: BreweryData) => {
        return item.established >= event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("afterCleared", event => {
      this.detach("afterChanged");
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("beforeChanged", event => {
      this.append("beforeChanged", (item: BreweryData) => {
        return item.established <= event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("beforeCleared", event => {
      this.detach("beforeChanged");
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("lettersChanged", event => {
      this.append("lettersChanged", (item: BreweryData) => {
        return item.name.charAt(0) == event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("lettersCleared", event => {
      this.detach("lettersCleared");
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("lengthChanged", event => {
      this.append("lengthChanged", (item: BreweryData) => {
        return item.name.length == event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("lengthCleared", event => {
      this.detach("lengthCleared");
      this.refresh();
    }, "breweries");
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe("breweries");
  }

  public select(item: BreweryData): void {
    this.selection = item;
    console.log(this.selection.name);
  }

  public build() {

    // Years
    this.yearsOptions = this.data
      .reduce((results: { value: number, text: string }[], current) => {
        if (!current.established)
          return results;
        var found = results.find(p => p.value == current.established);
        if (!found) {
          results.push({
            value: current.established,
            text: current.established.toString(),
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.value - b.value);
    this.yearsOptions.unshift({ value: 0, text: "ALL" });

    // After
    this.afterOptions = this.data
      .reduce((results: { value: number, text: string }[], current) => {
        if (!current.established)
          return results;
        var century = this.century(current.established);
        var found = results.find(p => p.value == century.start);
        if (!found) {
          results.push({
            value: century.start,
            text: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.value - b.value);
    this.afterOptions.unshift({ value: 0, text: "ALL" })

    // Before
    this.beforeOptions = this.data
      .reduce((results: { value: number, text: string }[], current) => {
        if (!current.established)
          return results;
        var century = this.century(current.established);
        var found = results.find(p => p.value == century.end);
        if (!found) {
          results.push({
            value: century.end,
            text: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.value - b.value);
    this.beforeOptions.unshift({ value: 0, text: "ALL" })

    // Letters
    this.lettersOptions = this.data
      .reduce((results: { value: string, text: string }[], current) => {
        if (!current.name)
          return results;
        var letter = current.name.charAt(0);
        var found = results.find(p => p.value == letter);
        if (!found) {
          results.push({
            value: letter,
            text: letter,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.text.localeCompare(b.text));
    this.lettersOptions.unshift({ value: "*", text: "ALL" });

    // Length
    this.lengthOptions = this.data
      .reduce((results: { value: number, text: string }[], current) => {
        if (!current.name)
          return results;
        var found = results.find(p => p.value == current.name.length);
        if (!found) {
          results.push({
            value: current.name.length,
            text: current.name.length.toString(),
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.value - b.value);
    this.lengthOptions.unshift({ value: 0, text: "ALL" });
  }

  public refresh(): void {
    this.breweries = this.data.filter(brewery => {
      var match = this.queries.every(p => p.predicate(brewery) == true);
      return match;
    });
  }

  public append(name: string, predicate: (item: BreweryData) => boolean) {
    let query = this.queries.find(p => p.name == name);
    if (query) {
      var index = this.queries.indexOf(query);
      this.queries.splice(index, 1);
    }

    this.queries.push({
      name: name,
      predicate: predicate
    });
  }

  public detach(name: string) {
    let query = this.queries.find(p => p.name == name);
    if (query) {
      var index = this.queries.indexOf(query);
      this.queries.splice(index, 1);
    }
  }

  public century(year: number): { start: number, end: number, text: string } {
    var value = Math.ceil(year / 100);
    return {
      start: (value - 1) * 100 + 1,
      end: value * 100,
      text: `${value}th century`
    };
  }
}




