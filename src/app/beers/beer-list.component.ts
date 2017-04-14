import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeersService } from './../shared/services/beers.service';
import { BeerData } from './../shared/services/beers.models';
import { BeerModel } from "./beer-card.component";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  term: string;
  beers: BeerModel[] = [];
  display: boolean = false;
  selection: BeerModel;
  
  @Output()
  loaded: EventEmitter<{found:number}> = new EventEmitter();

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
                style: p.style ? p.style.name : "N/A",
                label: p.labels ? p.labels.medium : "./assets/img/beer-generic.jpg",
                description: p.description ? p.description : "N/A",
                abv: p.abv,
                ibu: p.ibu,
                favorite: false,
              };
              return beer;
            })
            .sort((a, b) => a.name.localeCompare(b.name));

            this.loaded.next({found:this.beers.length});
        },
        error => {
          console.error(error);
        });
    });

  }

  showDialog() {
    this.display = true;
  }

  select(item: BeerModel): void {
    this.selection = item;
    console.log(this.selection.name);
    //this.display = true;
  }
}
