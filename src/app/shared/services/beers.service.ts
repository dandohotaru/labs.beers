
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ErrorHandler } from './../exceptions/error.handler';
import { Beer } from './beers.models';

@Injectable()
export class BeersService {

    searchUrl: string;
    headers: Headers;

    constructor(private httpHandler: Http, private errorHandler: ErrorHandler) {
    }

    public load(): Observable<Beer[]> {

        return this.httpHandler
            .get('../../assets/json/beers.json')
            .map((response: Response)=>{
                let body = response.json();
                return body.data || {};
            })
            .catch(this.errorHandler.handle);
    }

    public search(term: string): Observable<Beer[]> {

        return this.httpHandler
            .get('../../assets/json/beers.json')
            .map((response: Response)=>{
                let body = response.json();
                var results = body.data as Beer[];

                return results.filter(p => p.name.includes(term));
            })
            .catch(this.errorHandler.handle);
    }
}