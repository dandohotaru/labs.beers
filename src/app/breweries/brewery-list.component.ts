import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreweriesService } from 'app/shared/services/breweries.service';
import { BreweryData } from 'app/shared/services/breweries.models';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit {

  term: string;
  breweries: BreweryData[] = [];
  selection: BreweryData;

  @Output()
  loaded: EventEmitter<{ found: number }> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BreweriesService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      this.term = p["q"] || "";
      var breweries = this.service
        .search(this.term)
        .subscribe(breweries => {

          this.breweries = breweries.filter(p => p.established);
          this.loaded.next({ found: this.breweries.length });
          
        },
        error => {
          console.error(error);
        });
    });
  }

  select(item: BreweryData): void {
    this.selection = item;
    console.log(this.selection.name);
  }
}
