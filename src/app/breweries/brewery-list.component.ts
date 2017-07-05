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
  subscription: Subscription;
  establishedOptions: { key: number, value: number }[] = []

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
              key: p.established,
              value: p.established
            }))
            .sort((a, b) => a.value - b.value);
        },
        error => {
          console.error(error);
        });
    });

    this.subscription = this.mediator.subscribe("establishedChanged", event => {
      console.log(event);

      var logic = (data: BreweryData[]) => data.filter(p => p.established == event.key);
      var predicate = this.predicates.find(p => p.id == "establishedChanged");
      if (predicate) {
        predicate.filter = logic;
      }
      else {
        this.predicates.push({ id: "establishedChanged", filter: logic });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.dispose();
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




