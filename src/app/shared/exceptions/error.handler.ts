
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ErrorHandler {

    constructor() { }

    public handle(error: Response | any) {
        let message: string;
        if (error instanceof Response) {
            var body = error.json();
            var payload = body.error || JSON.stringify(body);
            message = `${error.status} - ${error.statusText || ''} ${payload}`;
        } else {
            message = error.message 
                ? `${error.message} (${error.stack || 'no stack'})` 
                : `${error} (no stack)`;
        }

        console.warn(message);

        return Observable.throw(message);
    }
}