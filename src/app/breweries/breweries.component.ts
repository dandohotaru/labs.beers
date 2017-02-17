import { Component, OnInit } from '@angular/core';

import { BreweriesService } from './../shared/services/breweries.service';
import { Brewery } from './../shared/services/breweries.models';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html'
})
export class BreweriesComponent implements OnInit {

  breweries: Brewery[];

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
