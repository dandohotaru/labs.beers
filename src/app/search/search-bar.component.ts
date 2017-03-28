
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventAggregator } from 'aurelia-event-aggregator';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { BreweriesService } from './../shared/services/breweries.service';
import { BreweryData } from './../shared/services/breweries.models';
import { BeersService } from './../shared/services/beers.service';
import { BeerData } from './../shared/services/beers.models';

import { TermSearched, BeerSearched, BrewerySearched } from './../shared/events/search.events';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

  private termsProxy: Subject<string> = new Subject<string>();
  private results: any[];

  constructor(
    private router: Router,
    private eventAggregator: EventAggregator,
    private breweriesService: BreweriesService,
    private beersService: BeersService)
  { }

  ngOnInit() {
    this.termsProxy
      //.distinctUntilChanged()
      .debounceTime(300)
      .switchMap(term => {

        this.eventAggregator.publish(new TermSearched(term));

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

  public search(term: string): void {
    this.termsProxy.next(term);
  }
}

