

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { BreweriesService } from 'app/shared/services/breweries.service';

@Injectable()
export class BreweriesSearcher {

  constructor(private service: BreweriesService) { }

  public search(terms: Observable<string>) {
    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => {
        return this.service.search(term)
      });
  }

}