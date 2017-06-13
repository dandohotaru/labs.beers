import 'rxjs/add/operator/filter';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

import { SearchService } from 'app/search/search.service';
import { TermSearched, BeerSearched, BrewerySearched } from 'app/shared/events/search.events';
import { Subscription } from "rxjs/Subscription";
import { EventAggregator } from "app/shared/messages/event.aggregator";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
        private eventAggregator: EventAggregator,
        private searchService: SearchService) { }

    routerSubscription: Subscription;

    public ngOnInit() {
        console.log("starting up");

        // Scroll
        this.routerSubscription = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                document.body.scrollTop = 0;
            });

        // Events
        this.eventAggregator.subscribe(BeerSearched, response => {
            console.info(`BeerSearched: ${response.term}`);
        });

        this.eventAggregator.subscribe(BrewerySearched, response => {
            console.info(`BrewerySearched: ${response.term}`);
        });

        this.eventAggregator.subscribe(TermSearched, (response: TermSearched) => {
            console.info(`TermSearched: ${response.term}`);
            this.searchService.track(response.term)
        });

        this.eventAggregator.subscribe("termSearched", response => {
            console.info(`TermSearched: ${response.term}`);
        });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

}
