
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator";
import { QueryProvider } from 'app/shared/filters/query.provider';
import { RelayService } from 'app/breweries/relay.service';

export interface BreweryStore{
  cached?: BreweryData[],
  refined?: BreweryData[],
  rendered?: BreweryData[],
}

@Component({
  selector: 'app-brewery-list',
  templateUrl: 'brewery-list.component.html',
  providers: [EventAggregator]
})
export class BreweryListComponent implements OnInit, OnDestroy {

  public term: string;
  public store: BreweryStore = {};
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

    this.service.load()
      .switchMap(results => {
        this.store.cached = results;
        this.mediator.publish("breweriesLoaded", results);
        return this.route.queryParams;
      })
      .subscribe(params => {

        // Analyse
        this.querier.analyse("establish", (item: BreweryData) => {
          return item.established > 0;
        }, true);

        this.querier.analyse("search", (item: BreweryData) => {
          return item.name.toLowerCase().includes(params["q"][0]);
        }, params["q"]);

        this.querier.analyse("organic", (item: BreweryData) => {
          return item.isOrganic == params["organic"];
        }, params["organic"]);

        this.querier.analyse("year", (item: BreweryData) => {
          return item.established == params["year"];
        }, params["year"]);

        this.querier.analyse("after", (item: BreweryData) => {
          return item.established >= params["after"];
        }, params["after"]);

        this.querier.analyse("before", (item: BreweryData) => {
          return item.established <= params["before"];
        }, params["before"]);

        this.querier.analyse("letter", (item: BreweryData) => {
          return item.name.charAt(0) == params["letter"];
        }, params["letter"]);

        this.querier.analyse("length", (item: BreweryData) => {
          return item.name.length == params["length"];
        }, params["length"]);

        // Apply
        this.querier.apply(this.store.cached, results => {
          this.store.refined = results
          this.mediator.publish("breweriesChanged", results);
        });
      })
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
}
