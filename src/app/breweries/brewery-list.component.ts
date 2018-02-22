import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { QueryService } from 'app/shared/filters/query.service';
import { RelayService, build } from 'app/shared/filters/relay.service';

import { BreweriesMapper } from './brewery-list.mappers';
import { BreweriesSearcher } from './brewery-list.search';

interface BreweryStore {
  cached?: BreweryData[],
  refined?: BreweryData[],
  rendered?: BreweryData[],
  params?: {[key: string]: string},
}

@Component({
  selector: 'app-brewery-list',
  templateUrl: 'brewery-list.component.html',
})
export class BreweryListComponent implements OnInit, OnDestroy {

  public term: string;
  public store: BreweryStore = {};
  public selection: BreweryData;
  public terms = new Subject<string>();

  @Output()
  public loaded: EventEmitter<{ found: number }> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private provider: BreweriesService, 
    private searcher: BreweriesSearcher,
    private querier: QueryService,
    private relay: RelayService,
    private mediator: EventAggregator,
    public mapper: BreweriesMapper) {
  }

  public ngOnInit() {

    this.terms
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(term => {
        let value = term && term.length > 0 ? term : null;
        this.relay.navigate({ ["q"]: value });
      });

    this.provider.load()
      .switchMap(results => {
        this.store.cached = results;
        this.mediator.publish("breweriesLoaded", results);
        return this.route.queryParams;
      })
      .subscribe(params => {

        // Analyse
        this.querier.register("by-search", (item: BreweryData, value: string) => {
          return item.name.toLowerCase().includes(value);
        }, params["q"] ? params["q"] : "");

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
          this.store.params = params;
          this.store.refined = results;
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

  public navigate(key: string, event: any) {
    this.relay.navigate(build(key, event));
  }
}