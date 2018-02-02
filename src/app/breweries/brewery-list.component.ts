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

  public ngOnInit() {

    console.log("init");

    this.route.queryParams.subscribe(params => {
      this.parameters = params;

      this.term = params["q"] && params["q"][0]
        ? params["q"][0]
        : "";

      var breweries = this.service
        .search(this.term)
        .subscribe(response => {

          // Data
          this.data = response;

          // Filters
          this.handle("establish", (item: BreweryData, dated: boolean) => {
            return item.established > 0 == dated;
          }, true);

          this.handle("organic", (item: BreweryData, organic: string) => {
            return item.isOrganic == organic;
          }, params["organic"]);

          this.handle("year", (item: BreweryData, year: number) => {
            return item.established == year;
          }, params["year"]);

          this.handle("after", (item: BreweryData, after: number) => {
            return item.established >= after;
          }, params["after"]);

          this.handle("before", (item: BreweryData, before: number) => {
            return item.established <= before;
          }, params["before"]);

          this.handle("letter", (item: BreweryData, letter: string) => {
            return item.name.charAt(0) == letter;
          }, params["letter"]);

          this.handle("length", (item: BreweryData, length: number) => {
            return item.name.length == length;
          }, params["length"]);

          // Refresh
          this.refresh();

          this.mediator.publish("breweriesChanged", this.data);

          // Loaded
          this.loaded.emit({ found: this.breweries.length });
        },
        error => {
          console.error(error);
        });
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

  public refresh(): void {
    this.breweries = this.data.filter(brewery => {
      var match = this.queries.every(p => p.predicate(brewery) == true);
      return match;
    });
  }

  public handle(context: string, predicate: (item: BreweryData, value) => boolean, value: string|number|boolean) {
    if (value) {
      this.append(context, (item: BreweryData) => {
        return predicate(item, value);
      });
    } else {
      this.detach(context);
    }
  }

  public append(context: string, predicate: (item: BreweryData) => boolean) {
    let query = this.queries.find(p => p.name == context);
    if (query) {
      var index = this.queries.indexOf(query);
      this.queries.splice(index, 1);
    }

    this.queries.push({
      name: context,
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




