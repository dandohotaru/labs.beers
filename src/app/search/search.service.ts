import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

    constructor() { }

    handle(term: string): void {
        var value = localStorage.getItem("search-history");

        var searches: SearchData[] = value
            ? JSON.parse(value)
            : [];

        var search = searches.find(p => p.term == term);
        if (search) {
            search.counter++;
        }
        else {
            search = {
                term: term,
                counter: 1,
            };
            searches.push(search);
        }

        localStorage["search-history"] = JSON.stringify(searches);
    }
}

export class SearchData {
    term: string;
    counter: number;
}