import { Component, OnInit } from '@angular/core';
import { EventAggregator } from 'aurelia-event-aggregator';

import { SearchService } from './search/search.service';

import { TermSearched, BeerSearched, BrewerySearched } from './shared/events/search.events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private eventAggregator: EventAggregator, private searchService: SearchService) { }

  public ngOnInit() {
    console.log("starting up");

    this.eventAggregator.subscribe(BeerSearched, response =>{
        console.info(`BeerSearched: ${response.term}`);
    });

    this.eventAggregator.subscribe(BrewerySearched, response =>{
        console.info(`BrewerySearched: ${response.term}`);
    });

    this.eventAggregator.subscribe(TermSearched, (response: TermSearched) =>{
        console.info(`TermSearched: ${response.term}`);
        this.searchService.track(response.term)
    });

    this.eventAggregator.subscribe("termSearched", response =>{
        console.info(`TermSearched: ${response.term}`);
    });
  }

}
