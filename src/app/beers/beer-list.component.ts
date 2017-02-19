import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeersService } from './../shared/services/beers.service';
import { BeerData } from './../shared/services/beers.models';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ["./beer-list.component.css"]
})
export class BeerListComponent implements OnInit {

  term: string;
  beers: BeerData[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BeersService)
  { }

  ngOnInit() {

    this.route.queryParams.subscribe(p => {
      this.term = p["q"] || "";
      console.info(`BeerSearch: ${this.term}`);

      var beers = this.service.load()
        .distinctUntilChanged()
        .subscribe(
          beers => {
            if (this.term && this.term.length > 0)
              this.beers = beers
                .filter(p => p.name.toLowerCase()
                .includes(this.term.toLowerCase()));
            else
              this.beers = beers;
          },
          error => {
            console.error(error);
          });
    });

  }
}
