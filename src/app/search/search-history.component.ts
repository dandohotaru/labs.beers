import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

import { TermSearched } from "app/shared/events/search.events";
import { SearchService } from "app/search/search.service";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html'
})
export class SearchHistoryComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  searches: { term: string, counter: number }[] = [];

  constructor(
    private eventAggregator: EventAggregator, 
    private searchService: SearchService) { 
  }

  ngOnInit() {

    var subscription = this.eventAggregator.subscribe(TermSearched, response => {
      console.info(`TermSearched: ${response.term}`);
    });
    this.subscriptions.push(subscription);

    this.searches = this.searchService
      .query({page: 0, size: 6})
      .map(p => {
        return {
          term: p.term,
          counter: p.counter
        }
      });

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.dispose();
    });
  }
}
