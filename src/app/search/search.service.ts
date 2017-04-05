import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

    constructor() { }

    track(term: string): void {
        var content = localStorage.getItem("search-history");

        var searches: SearchData[] = content
            ? JSON.parse(content)
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

    query(options?: { page: number, size: number }): SearchData[] {
        var content = localStorage.getItem("search-history");
        var searches: SearchData[] = content
            ? JSON.parse(content)
            : [];

        searches = searches
            .sort((a, b) => {
                return b.counter - a.counter;
            });

        if (options) {
            searches = searches.slice(0, options.size ? options.size : 5);
        }

        return searches;
    }
}

export class SearchData {
    term: string;
    counter: number;
}