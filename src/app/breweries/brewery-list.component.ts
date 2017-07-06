import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { Subscription } from 'app/shared/messages/event.aggregator';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit, OnDestroy {

  term: string;
  breweries: BreweryData[] = [];
  selection: BreweryData;
  subscriptions: Subscription[] = [];
  establishedOptions: { value: number, text: number }[] = [];
  afterOptions: { value: number, text: string }[] = [];
  beforeOptions: { value: number, text: string }[] = [];

  //predicates: { id: string, (data: BreweryData[]): BreweryData[] }[] = [];
  predicates: Something[] = [];

  @Output()
  loaded: EventEmitter<{ found: number }> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BreweriesService,
    private mediator: EventAggregator) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.term = params["q"] && params["q"][0]
        ? params["q"][0]
        : "";

      var breweries = this.service
        .search(this.term)
        .subscribe(breweries => {

          this.breweries = breweries.filter(p => p.established);
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

    this.subscriptions.push(this.mediator.subscribe("yearChanged", event => {
      console.log(event);

      var logic = (data: BreweryData[]) => data.filter(p => p.established == event.value);
      var predicate = this.predicates.find(p => p.id == "year");
      if (predicate) {
        predicate.filter = logic;
      }
      else {
        this.predicates.push({ id: "year", filter: logic });
      }
    }));

    this.subscriptions.push(this.mediator.subscribe("afterChanged", event => {
      console.log(event);

      var logic = (data: BreweryData[]) => data.filter(p => p.established >= event.value);
      this.predicates.push({ id: "after", filter: logic });
    }));

    this.subscriptions.push(this.mediator.subscribe("beforeChanged", event => {
      console.log(event);

      var logic = (data: BreweryData[]) => data.filter(p => p.established <= event.value);
      this.predicates.push({ id: "before", filter: logic });
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(p => p.dispose());
  }


//predicates: { id: string, (data: BreweryData[]): BreweryData[] }[] = [];
  //test: { id: string, (data: BreweryData[]): BreweryData[] }[] = [];

  and(p1, p2) {
    return (x) => {
      return p1(x) && p2(x);
    }
  }

  matchEstablished(items: BreweryData[], established: number) {
    return items.filter(p=>p.established == established);
  }

  matchAfter(items: BreweryData[], after: number) {
    return items.filter(p=>p.established >= after);
  }

  matchBefore(items: BreweryData[], before: number) {
    return items.filter(p=>p.established <= before);
  }

  filter() {

    var temp = this.breweries;
    this.predicates.forEach(predicate => {
      temp = predicate.filter(temp);
    });

    console.log(temp.length);

    return temp;
  }

  select(item: BreweryData): void {
    this.selection = item;
    console.log(this.selection.name);
  }
}

//predicates: { id: string, (data: BreweryData[]): BreweryData[] }[] = [];

export class Something {
  id: string;
  filter: (data: BreweryData[]) => BreweryData[];
}




