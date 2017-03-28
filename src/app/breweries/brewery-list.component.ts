import { Component, OnInit } from '@angular/core';

import { BreweriesService } from './../shared/services/breweries.service';
import { BreweryData } from './../shared/services/breweries.models';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit {

  breweries: BreweryData[] = [];

  constructor(private service: BreweriesService) { }

  ngOnInit() {

    var breweries = this.service.load().subscribe(
      breweries => {
        this.breweries = breweries.filter(p => p.established);
      },
      error => {
        console.error(error);
      });

  }
}
