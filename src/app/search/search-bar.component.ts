import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';
import { BeersService } from 'app/shared/services/beers.service';
import { BeerData } from 'app/shared/services/beers.models';

import { TermSearched, BeerSearched, BrewerySearched } from 'app/shared/events/search.events';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

  private termsProxy: Subject<string> = new Subject<string>();
  private results: any[];

  constructor(
    private router: Router,
    private mediator: EventAggregator,
    private breweriesService: BreweriesService,
    private beersService: BeersService)
    {}

  public ngOnInit() {
    this.termsProxy
      .debounceTime(300)
      .switchMap(term => {

        this.mediator.publish("TermSearched", new TermSearched(term));

        var temp = term
          ? Observable.of<string[]>([term])
          : Observable.of<string[]>([]);
        return temp;
      })
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      })
      .subscribe(term => {
        var options: NavigationExtras = {
          queryParams: {
            q: term
          }
        };
        this.router.navigate([`/search`], options);
      });
  }

  public ngOnDestroy(): void {
  }

  public search(term: string): void {
    this.termsProxy.next(term);
  }
}

