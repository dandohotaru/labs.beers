
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
            .map((response: Response) => {
                let body = response.json();
                return body.data || {};
            })
            .catch(this.errorHandler.handle);
    }

    public search(term: string): Observable<BeerData[]> {

        return this.httpHandler
            .get('./assets/json/beers.json')
            .map((response: Response) => {
                let body = response.json();
                var results = body.data as BeerData[];
                if (term && term.length > 0) {
                    var data = results.filter(p => {
                        var found = p.name && p.name.toLowerCase().includes(term.toLowerCase())
                            || p.description && p.description.toLowerCase().includes(term.toLowerCase());
                        return found;
                    });

                    return data;
                }

                return results;
            })
            .catch(this.errorHandler.handle);
    }
}