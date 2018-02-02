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

      var organic = params["organic"] || null;
      var year = params["year"] || null;
      var after = params["after"] || null;
      var before = params["before"] || null;
      var letter = params["letter"] || null;
      var length = params["length"] || null;

      var breweries = this.service
        .search(this.term)
        .subscribe(response => {

          // Data
          this.data = response;

          // Filters
          this.append("yearFound", (item: BreweryData) => {
            return item.established != null;
          });

          if (organic) {
            this.append("organicChanged", (item: BreweryData) => {
              return item.isOrganic == organic;
            });
          }
          else {
            this.detach("organicChanged");
          }

          if (year) {
            this.append("yearChanged", (item: BreweryData) => {
              return item.established == year;
            });
          }
          else {
            this.detach("yearChanged");
          }

          if (after) {
            this.append("afterChanged", (item: BreweryData) => {
              return item.established >= +after;
            });
          }
          else {
            this.detach("afterChanged");
          }

          if (before) {
            this.append("beforeChanged", (item: BreweryData) => {
              return item.established <= +before;
            });
          }
          else {
            this.detach("beforeChanged");
          }

          if (letter) {
            this.append("letterChanged", (item: BreweryData) => {
              return item.name.charAt(0) == letter;
            });
          }
          else {
            this.detach("letterChanged");
          }

          if (length) {
            this.append("lengthChanged", (item: BreweryData) => {
              return item.name.length == length;
            });
          }
          else {
            this.detach("lengthChanged");
          }

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
    console.log(item.name);
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




