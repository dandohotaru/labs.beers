
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ErrorHandler } from './../exceptions/error.handler';
import { BreweryData } from './breweries.models';

@Injectable()
export class BreweriesService {

    searchUrl: string;
    headers: Headers;

    constructor(private httpHandler: Http, private errorHandler: ErrorHandler) {
        // Cors not supported by design by brewerydb, fallback to local files for now 
        //this.searchUrl = " http://api.brewerydb.com/v2/search?type=brewery&q=orval rochefort duvel chimay westvleteren achouffe&key=7a194532948c7877bd1815276dd7d070";
        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }

    public load(): Observable<BreweryData[]> {

        return this.httpHandler
            .get('../../assets/json/breweries.json')
            .map((response: Response) => {
                let body = response.json();
                return body.data || {};
            })
            .catch(this.errorHandler.handle);
    }
}