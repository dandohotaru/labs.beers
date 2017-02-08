import { Component, OnInit } from '@angular/core';

import { BreweriesService } from './breweries.service';
import { Brewery } from './breweries.models';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html'
})
export class BreweriesComponent implements OnInit {

  breweries: Brewery[];

  constructor(private service: BreweriesService) { }

  ngOnInit() {

    var breweries = this.service.search().subscribe(
      breweries => {
        this.breweries = breweries.filter(p=>p.established);
      },
      error => {
        console.error(error);
      });

  }
}
