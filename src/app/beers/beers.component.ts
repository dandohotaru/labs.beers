import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeersService } from './../shared/services/beers.service';
import { Beer } from './../shared/services/beers.models';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html'
})
export class BeersComponent implements OnInit {

  term: string;
  beers: Beer[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BeersService) {
    route.queryParams.subscribe(p => {
      this.term = p["q"] || "";
      console.info(`BeerSearch: ${this.term}`);
    });
  }

  ngOnInit() {

    var beers = this.service.load()
      
      .subscribe(
        beers => {
          if (this.term && this.term.length > 0)
            this.beers = beers.filter(p => p.name.toLowerCase().includes(this.term.toLowerCase()));
          else
            this.beers = beers;
        },
        error => {
          console.error(error);
        });

  }
}
