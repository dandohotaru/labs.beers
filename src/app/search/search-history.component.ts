import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

import { TermSearched } from "app/shared/events/search.events";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html'
})
export class SearchHistoryComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  constructor(private eventAggregator: EventAggregator) { }

  ngOnInit() {
    var subscription = this.eventAggregator.subscribe(TermSearched, response => {
      console.info(`TermSearched: ${response.term}`);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.dispose();
    });
  }
}
