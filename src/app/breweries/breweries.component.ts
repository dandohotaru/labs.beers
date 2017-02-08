import { Component, OnInit } from '@angular/core';

import { BreweriesService } from './breweries.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html'
})
export class BreweriesComponent implements OnInit {

  breweries: any[] = [];

  constructor(private service: BreweriesService) { }

  ngOnInit() {
    var breweries = this.service.search().subscribe(
      data => {
        this.breweries = data;
      },
      error => {
        console.error(error);
      });
  }

}
