
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { QueryProvider } from 'app/shared/filters/query.provider';
import { RelayService } from 'app/breweries/relay.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  providers: [EventAggregator]
})
export class BreweryListComponent implements OnInit, OnDestroy {

  public term: string;
  public data: BreweryData[] = [];
  public breweries: BreweryData[] = [];
  public selection: BreweryData;

  @Output()
  public loaded: EventEmitter<{ found: number }> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BreweriesService,
    private mediator: EventAggregator,
    private querier: QueryProvider,
    private relay: RelayService) {
  }

  public ngOnInit() {

    Observable
      .combineLatest(
        this.service.load(),
        this.route.queryParams,
        (data, params) => {
          return { data, params }
        })
      .subscribe(response => {

        // Data
        this.data = response.data;
        this.mediator.publish("breweriesChanged", response.data);

        // Predicates
        this.register("establish", (item: BreweryData, dated: boolean) => {
          return item.established > 0 == dated;
        }, true);

        this.register("search", (item: BreweryData, term: string) => {
          return item.name.toLowerCase().includes(term);
        }, response.params["q"] ? response.params["q"][0] : null);

        this.register("organic", (item: BreweryData, organic: string) => {
          return item.isOrganic == organic;
        }, response.params["organic"]);

        this.register("year", (item: BreweryData, year: number) => {
          return item.established == year;
        }, response.params["year"]);

        this.register("after", (item: BreweryData, after: number) => {
          return item.established >= after;
        }, response.params["after"]);

        this.register("before", (item: BreweryData, before: number) => {
          return item.established <= before;
        }, response.params["before"]);

        this.register("letter", (item: BreweryData, letter: string) => {
          return item.name.charAt(0) == letter;
        }, response.params["letter"]);

        this.register("length", (item: BreweryData, length: number) => {
          return item.name.length == length;
        }, response.params["length"]);

        // Match
        this.breweries = this.data.filter(brewery => {
          var match = this.querier.match(brewery);
          return match;
        });

        this.mediator.publish("breweriesChanged", this.breweries);

        // Loaded
        this.loaded.emit({ found: this.breweries.length });

      },
      error => {
        console.error(error);
      });
    
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe("breweries");
  }

  public select(item: BreweryData): void {
    this.selection = item;
    console.log(item);
  }

  public test() {
    this.relay.direct({ key: "foo", value: [42, 41, true] });
    console.log(this.route.snapshot);
    console.log(this.router.url);
    console.log(this.route.snapshot.url);
  }

  public register(context: string, predicate: (item: BreweryData, value) => boolean, value: string|number|boolean) {
    if (value) {
      this.querier.attach(context, (item: BreweryData) => {
        return predicate(item, value);
      });
    } else {
      this.querier.detach(context);
    }
  }
}
