import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeersService } from './../shared/services/beers.service';
import { BeerData } from './../shared/services/beers.models';
import { BeerModel } from "./beer-card.component";

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {

  term: string;
  beers: BeerModel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BeersService)
  { }

  ngOnInit() {

    this.route.queryParams.subscribe(p => {
      this.term = p["q"] || "";

      var beers = this.service
        .search(this.term)
        .subscribe(beers => {

          this.beers = beers
            .map(p => {
              var beer: BeerModel = {
                id: p.id,
                name: p.nameDisplay,
                style: p.style ? p.style.name : null,
                label: p.labels ? p.labels.medium : null,
                description: p.description,
                abv: p.abv,
                ibu: p.ibu,
                favorite: false,
              };
              return beer;
            })
            .sort((a, b) => a.name.localeCompare(b.name));
        },
        error => {
          console.error(error);
        });
    });

  }
}
