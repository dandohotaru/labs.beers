import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { Subscription } from 'app/shared/messages/event.aggregator';
import { Query } from "app/shared/filters/query.models";

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit, OnDestroy {

  term: string;
  breweries: BreweryData[] = [];
  selection: BreweryData;
  queries: Query<BreweryData>[] = [];
  subscriptions: Subscription[] = [];

  yearsOptions: { value: number, text: string }[] = [];
  afterOptions: { value: number, text: string }[] = [];
  beforeOptions: { value: number, text: string }[] = [];

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
        .subscribe(breweries => {

          this.breweries = breweries.filter(p => p.established);
          this.loaded.next({ found: this.breweries.length });

          // Years
          this.yearsOptions = this.breweries
            .map(p => ({
              value: p.established,
              text: p.established.toString()
            }))
            .sort((a, b) => a.value - b.value);
          this.yearsOptions.unshift({ value: 0, text: "ALL" })

          // After
          this.afterOptions = [
            { value: 0, text: "ALL" },
            { value: 1500, text: "16th century" },
            { value: 1600, text: "17th century" },
            { value: 1700, text: "18th century" },
            { value: 1800, text: "19th century" },
            { value: 1900, text: "20th century" },
            { value: 2000, text: "21th century" },
          ];

          // Before
          this.beforeOptions = [
            { value: 0, text: "ALL" },
            { value: 1500, text: "16th century" },
            { value: 1600, text: "17th century" },
            { value: 1700, text: "18th century" },
            { value: 1800, text: "19th century" },
            { value: 1900, text: "20th century" },
            { value: 2000, text: "21th century" },
          ];
        },
        error => {
          console.error(error);
        });
    });


    this.subscriptions.push(this.mediator.subscribe("yearChanged", event => {
      this.apply("yearChanged", (item: BreweryData) => {
        return item.established == event.value;
      });
    }));

    this.subscriptions.push(this.mediator.subscribe("yearCleared", event => {
      this.clear("yearChanged");
    }));

    this.subscriptions.push(this.mediator.subscribe("afterChanged", event => {
      this.apply("afterChanged", (item: BreweryData) => {
        return item.established >= event.value;
      });
    }));

    this.subscriptions.push(this.mediator.subscribe("afterCleared", event => {
      this.clear("afterChanged");
    }));

    this.subscriptions.push(this.mediator.subscribe("beforeChanged", event => {
      this.apply("beforeChanged", (item: BreweryData) => {
        return item.established <= event.value;
      });
    }));

    this.subscriptions.push(this.mediator.subscribe("beforeCleared", event => {
      this.clear("beforeChanged");
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(p => p.dispose());
  }

  public select(item: BreweryData): void {
    this.selection = item;
    console.log(this.selection.name);
  }

  public apply(name: string, predicate: (item: BreweryData) => boolean) {
    let query = this.queries.find(p => p.name == name);
    if (query) {
      var index = this.queries.indexOf(query);
      this.queries.splice(index, 1);
    }

    this.queries.push({
      name: name,
      predicate: predicate
    });

    this.queries = this.queries.slice();
  }

  public clear(name: string) {
    let query = this.queries.find(p => p.name == name);
    if (query) {
      var index = this.queries.indexOf(query);
      this.queries.splice(index, 1);
    }

    this.queries = this.queries.slice();
  }
}




