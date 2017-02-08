
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Brewery } from './breweries.models';

@Injectable()
export class BreweriesService {

    searchUrl: string;
    headers: Headers;
    

    constructor(private http: Http) {
        // v1
        //this.searchUrl = " http://api.brewerydb.com/v2/search?type=brewery&q=orval rochefort duvel chimay westvleteren achouffe&key=7a194532948c7877bd1815276dd7d070";
        // this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Access-Control-Allow-Origin', '*');

        // v2
        // var azureSearchService = {
        //     url: 'https://ecofic-growler-dev.search.windows.net/indexes',
        //     apiParam: 'api-version=2015-02-28',
        //     apiKey: 'FAE8127A3ABAC769A752106C3D3A26DE',
        //     headers: {
        //         'api-key': 'FAE8127A3ABAC769A752106C3D3A26DE',
        //         'Content-Type': 'application/json'
        //     }
        // };

        // this.searchUrl = azureSearchService.url + '/breweries/docs/search?' + azureSearchService.apiParam;

        // this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('api-key', 'FAE8127A3ABAC769A752106C3D3A26DE');

        // v3
        

    }

    public search(): Observable<Brewery[]> {

        // v2
        // var data = JSON.stringify({
        //     select: 'id,name,location',
        //     orderby: 'name'
        // });

        // var options = new RequestOptions({
        //     headers: this.headers,
        // });

        // return this.http
        //     .post(this.searchUrl, data, options)
        //     .map(this.extractData)
        //     .catch(this.handleError);

        // v3
        return this.http.get('../../assets/json/breweries.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) : Observable<Brewery[]> {
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