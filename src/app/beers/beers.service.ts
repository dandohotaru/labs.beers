
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Beer } from './beers.models';

@Injectable()
export class BeersService {

    searchUrl: string;
    headers: Headers;

    constructor(private http: Http) {
    }

    public search(): Observable<Beer[]> {

        return this.http.get('../../assets/json/beers.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) : Observable<Beer[]> {
        let body = response.json();
        console.info(body.data.length);
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}