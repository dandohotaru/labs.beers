
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { BreweriesService } from './../shared/services/breweries.service';
import { Brewery } from './../shared/services/breweries.models';
import { BeersService } from './../shared/services/beers.service';
import { Beer } from './../shared/services/beers.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private terms: Subject<string> = new Subject<string>();
  private results: any[];

  constructor(private breweriesService: BreweriesService, private beersService: BeersService) { }

  ngOnInit() {
    this.terms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        var temp = term
          ? this.beersService.search(term)
          : Observable.of<Beer[]>([]);
        return temp;
      })
      .catch(error => {
        console.log(error);
        return Observable.of<Beer[]>([]);
      })
      .subscribe(results => {
        console.log(`Found: ${results.length}`);
        this.results = results;
      });
  }

  public search(term: string): void {
    this.terms.next(term);
  }

}
