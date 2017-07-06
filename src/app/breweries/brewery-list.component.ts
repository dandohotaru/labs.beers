import { YearFilterCleared, AfterFilterChanged, AfterFilterCleared, BeforeFilterChanged, BeforeFilterCleared } from './brewery-filter.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { Subscription } from 'app/shared/messages/event.aggregator';
import { YearFilterChanged } from "app/breweries/brewery-filter.component";

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit, OnDestroy {

  term: string;
  breweries: BreweryData[] = [];
  temp: BreweryData[] = [];
  selection: BreweryData;
  subscriptions: Subscription[] = [];
  establishedOptions: { value: number, text: number }[] = [];
  afterOptions: { value: number, text: string }[] = [];
  beforeOptions: { value: number, text: string }[] = [];

  predicates: { name: string, query: (item: BreweryData) => boolean }[] = [];

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
          this.temp = this.breweries;
          this.loaded.next({ found: this.breweries.length });

          this.establishedOptions = this.breweries
            .map(p => ({
              value: p.established,
              text: p.established
            }))
            .sort((a, b) => a.value - b.value);

          this.afterOptions = [
            { value: 1500, text: "16th century" },
            { value: 1600, text: "17th century" },
            { value: 1700, text: "18th century" },
            { value: 1800, text: "19th century" },
            { value: 1900, text: "20th century" },
            { value: 2000, text: "21th century" },
          ];

          this.beforeOptions = [
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


    this.subscriptions.push(this.mediator.subscribe(YearFilterChanged, event => {
      this.filter("yearChanged", (item: BreweryData) => {
        return item.established == event.value;
      });
    }));

    this.subscriptions.push(this.mediator.subscribe(YearFilterCleared, event => {
      this.clear("yearChanged");
    }));

    this.subscriptions.push(this.mediator.subscribe(AfterFilterChanged, event => {
      this.filter("afterChanged", (item: BreweryData) => {
        return item.established >= event.value;
      });
    }));

    this.subscriptions.push(this.mediator.subscribe(AfterFilterCleared, event => {
      this.clear("afterChanged");
    }));

    this.subscriptions.push(this.mediator.subscribe(BeforeFilterChanged, event => {
      this.filter("beforeChanged", (item: BreweryData) => {
        return item.established <= event.value;
      });
    }));

    this.subscriptions.push(this.mediator.subscribe(BeforeFilterCleared, event => {
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

  public filter(name: string, query: (item: any) => boolean) {

    let predicate = this.predicates.find(p => p.name == name);
    if (predicate) {
      var index = this.predicates.indexOf(predicate);
      this.predicates.splice(index, 1);
    }

    this.predicates.push({
      name: name,
      query: query
    });

    this.temp = this.breweries.filter(brewery => {
      var match = this.predicates.every(p => p.query(brewery) == true);
      return match;
    });

    console.log(this.temp.length);
  }

  public clear(name: string) {

    let predicate = this.predicates.find(p => p.name == name);
    if (predicate) {
      var index = this.predicates.indexOf(predicate);
      this.predicates.splice(index, 1);
    }

    this.temp = this.breweries.filter(brewery => {
      var match = this.predicates.every(p => p.query(brewery) == true);
      return match;
    });

    console.log(this.temp.length);
  }




  private and(first, second) {
    return (p: any) => {
      return first(p) && second(p);
    }
  }

  private or(first, second) {
    return (p: any) => {
      return first(p) || second(p);
    }
  }


}






