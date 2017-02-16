
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

    public search(): Observable<Beer[]> {

        return this.httpHandler
            .get('../../assets/json/beers.json')
            .map((response: Response)=>{
                let body = response.json();
                return body.data || {};
            })
            .catch(this.errorHandler.handle);
    }
}