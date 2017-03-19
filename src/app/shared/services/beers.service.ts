
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ErrorHandler } from './../exceptions/error.handler';
import { BeerData } from './beers.models';

@Injectable()
export class BeersService {

    searchUrl: string;
    headers: Headers;

    constructor(private httpHandler: Http, private errorHandler: ErrorHandler) {
    }

    public load(): Observable<BeerData[]> {

        return this.httpHandler
            .get('./assets/json/beers.json')
            .map((response: Response)=>{
                let body = response.json();
                return body.data || {};
            })
            .catch(this.errorHandler.handle);
    }

    public search(term: string): Observable<BeerData[]> {

        return this.httpHandler
            .get('../../assets/json/beers.json')
            .map((response: Response)=>{
                let body = response.json();
                var results = body.data as BeerData[];

                return results.filter(p => p.name.includes(term));
            })
            .catch(this.errorHandler.handle);
    }
}