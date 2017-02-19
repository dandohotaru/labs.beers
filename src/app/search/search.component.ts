
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private terms: Subject<string> = new Subject<string>();
  private results: any[];

  constructor(
    private router: Router,
    private eventAggregator: EventAggregator,
    private breweriesService: BreweriesService,
    private beersService: BeersService)
  { }

  ngOnInit() {
    this.terms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        var temp = term
          ? this.beersService.search(term)
          : Observable.of<BeerData[]>([]);
        return temp;
      })
      .catch(error => {
        console.log(error);
        return Observable.of<BeerData[]>([]);
      })
      .subscribe(results => {
        console.log(`Found: ${results.length}`);
        this.results = results;
      });
  }

  public search(term: string): void {
    this.terms.next(term);

    this.eventAggregator.publish(new BeerSearched(term));
    this.eventAggregator.publish(new BrewerySearched(term));
    this.eventAggregator.publish("termSearched", {
      term: term
    });

    var options = {
      queryParams: {
        q: term
      }
    };

    this.router.navigate([`/beers`], options);
  }
}
