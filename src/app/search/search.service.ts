import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

    constructor() { }

    handle(term: string): void {
        var value = localStorage.getItem("search-history");
        if (value) {
            var data: SearchData = JSON.parse(value);
            data.counter++;
            localStorage["search-history"] = JSON.stringify(data);
        }
        else {
            var data: SearchData = {
                term: term,
                counter: 1,
            };
            localStorage["search-history"] = JSON.stringify(data);
        }
    }
}

export class SearchData {
    term: string;
    counter: number;
}