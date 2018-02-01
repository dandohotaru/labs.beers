import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { Query } from "app/shared/filters/query.models";
import { RelayService } from 'app/breweries/relay.service';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  providers: [EventAggregator]
})
export class BreweryListComponent implements OnInit, OnDestroy {

  term: string;
  data: BreweryData[] = [];
  breweries: BreweryData[] = [];
  selection: BreweryData;
  queries: Query<BreweryData>[] = [];
  parameters: Params;

  @Output()
  loaded: EventEmitter<{ found: number }> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BreweriesService,
    private mediator: EventAggregator,
    private relay: RelayService) {
  }

  public test() {
    this.direct({ key:"foo", value: [42, 41, true] });
    console.log(this.route.snapshot);
    console.log(this.router.url);
    console.log(this.route.snapshot.url);
  }

  private direct(option: { key, value }) {
    this.relay.direct(['breweries'], option);

    // let options: Params = Object.assign({}, this.parameters);
    // options[option.key] = option.value;

    // this.router.navigate(['/breweries'], {
    //   queryParams: options,
    //   queryParamsHandling: "merge"
    // });
  }

  public ngOnInit() {

    console.log("init");

    this.route.queryParams.subscribe(params => {
      this.parameters = params;

      this.term = params["q"] && params["q"][0]
        ? params["q"][0]
        : "";

      var organic = params["organic"] || null;

      var breweries = this.service
        .search(this.term)
        .subscribe(response => {

          // Data
          this.data = response;
          this.queries.push({
            name: "yearFound",
            predicate: (model) => model.established != null
          })

          if (organic) {
            this.append("organicChanged", (item: BreweryData) => {
              return item.isOrganic == "Y";
            });
          }
          else {
            this.detach("organicChanged");
          }

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
      this.direct({ key: "organic", value: event.value });
      // this.append("organicChanged", (item: BreweryData) => {
      //   return item.isOrganic == event.value;
      // });
      // this.refresh();
    }, "breweries");

    this.mediator.subscribe("organicCleared", event => {
      this.direct({ key: "organic", value: null });
      //this.detach("organicChanged");
      //this.refresh();
    }, "breweries");

    this.mediator.subscribe("yearChanged", event => {
      this.direct({ key: "year", value: event.value });
      // this.append("yearChanged", (item: BreweryData) => {
      //   return item.established == event.value;
      // });
      // this.refresh();
    }, "breweries");

    this.mediator.subscribe("yearCleared", event => {
      this.direct({ key: "year", value: null });
      // this.detach("yearChanged");
      // this.refresh();
    }, "breweries");

    this.mediator.subscribe("afterChanged", event => {
      this.direct({ key: "after", value: event.value });
      // this.append("afterChanged", (item: BreweryData) => {
      //   return item.established >= event.value;
      // });
      // this.refresh();
    }, "breweries");

    this.mediator.subscribe("afterCleared", event => {
      this.direct({ key: "after", value: null });
      // this.detach("afterChanged");
      // this.refresh();
    }, "breweries");

    this.mediator.subscribe("beforeChanged", event => {
      this.direct({ key: "before", value: event.value });
      // this.append("beforeChanged", (item: BreweryData) => {
      //   return item.established <= event.value;
      // });
      this.refresh();
    }, "breweries");

    this.mediator.subscribe("beforeCleared", event => {
      this.direct({ key: "before", value: null });
      // this.detach("beforeChanged");
      // this.refresh();
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




