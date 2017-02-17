
export class TermSearched {
    term: string;

    constructor(term: string) {
        this.term = term;
    }
}

export class BeerSearched implements TermSearched {
    term: string;

    constructor(term: string) {
        this.term = term;
    }
}

export class BrewerySearched implements TermSearched {
    term: string;

    constructor(term: string) {
        this.term = term;
    }
}