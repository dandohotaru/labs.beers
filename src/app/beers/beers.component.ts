import { Component, OnInit } from '@angular/core';

import { BeersService } from './../shared/services/beers.service';
import { Beer } from './../shared/services/beers.models';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html'
})
export class BeersComponent implements OnInit {

  beers: Beer[];

  constructor(private service: BeersService) { }

  ngOnInit() {

    var beers = this.service.search().subscribe(
      beers => {
        this.beers = beers;
      },
      error => {
        console.error(error);
      });

  }
}
