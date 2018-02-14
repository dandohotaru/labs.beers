import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { TermSearched } from "app/shared/events/search.events";
import { SearchService } from "app/search/search.service";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html'
})
export class SearchHistoryComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public searches: { term: string, counter: number }[] = [];

  constructor(
    private mediator: EventAggregator, 
    private searchService: SearchService) { 
  }

  public ngOnInit() {

    var subscription = this.mediator.subscribe("TermSearched", response => {
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

  public ngOnDestroy(): void {
    this.subscriptions.forEach(p=>{
      p.unsubscribe();
    })
  }
}
