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

          this.mediator.publish("breweriesChanged", this.data);

          // Loaded
          this.loaded.emit({ found: this.breweries.length });
        },
        error => {
          console.error(error);
        });
    });

    this.mediator.subscribe("organicChanged", event => {
      this.append("organicChanged", (item: BreweryData) => {
        return item.isOrganic == event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("organicCleared", event => {
      this.detach("organicCleared");
      this.refresh();
    }, "breweries");

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
      this.detach("lettersChanged");
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("lengthChanged", event => {
      this.append("lengthChanged", (item: BreweryData) => {
        return item.name.length == event.value;
      });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("lengthCleared", event => {
      this.detach("lengthChanged");
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


}




