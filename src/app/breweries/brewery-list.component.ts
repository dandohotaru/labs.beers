import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { QueryService } from 'app/shared/filters/query.service';
import { RelayService } from 'app/shared/filters/relay.service';

import { BreweriesMapper } from './brewery-list.mappers';

export interface BreweryStore {
  cached?: BreweryData[],
  refined?: BreweryData[],
  rendered?: BreweryData[],
}

@Component({
  selector: 'app-brewery-list',
  templateUrl: 'brewery-list.component.html',
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
    private querier: QueryService,
    private relay: RelayService,
    public mapper: BreweriesMapper) {
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
        this.querier.register("by-search", (item: BreweryData, value: string) => {
          return item.name.toLowerCase().includes(value);
        }, params["q"] ? params["q"][0] : "");

        this.querier.register("by-organic", (item: BreweryData, value: string) => {
          return item.isOrganic == value;
        }, params["organic"]);

        this.querier.register("by-year", (item: BreweryData, value: number) => {
          return item.established && item.established == value
            || !item.established && value == 0;
        }, params["year"]);

        this.querier.register("by-after", (item: BreweryData, value: number) => {
          return item.established >= value;
        }, params["after"]);

        this.querier.register("by-before", (item: BreweryData, value: number) => {
          return item.established <= value;
        }, params["before"]);

        this.querier.register("by-letter", (item: BreweryData, value: string) => {
          return item.name.charAt(0) == value;
        }, params["letter"]);

        this.querier.register("by-length", (item: BreweryData, value: number) => {
          return item.name.length == value;
        }, params["length"]);

        this.querier.register("by-creation", (item: BreweryData, value: string) => {
          return moment(item.createDate).format("YYYYMMDD") == value;
        }, params["creation"]);

        // Apply
        this.querier.apply(this.store.cached, results => {
          this.store.refined = results
          this.mediator.publish("breweriesChanged", results);
        });
      })
  }

  public ngOnDestroy(): void {
  }

  public select(item: BreweryData): void {
    this.selection = item;
    console.log(item);
  }

  public foobar() {
    this.relay.navigate({ ["foo"]: [42, 41, true] });
    console.log(this.route.snapshot);
    console.log(this.router.url);
    console.log(this.route.snapshot.url);
  }
}



