import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeersService } from './../shared/services/beers.service';
import { BeerData } from './../shared/services/beers.models';
import { BeerModel } from "./beer.models";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  term: string;
  chunk: number = 4;
  cache: BeerModel[] = [];
  beers: BeerModel[] = [];
  selection: BeerModel;
  
  @Output()
  loaded: EventEmitter<{found:string}> = new EventEmitter();

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

          var models = beers
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

            this.cache = models;
            this.beers = models.slice(0, this.chunk);
            this.loaded.next({found:this.summary()});
        },
        error => {
          console.error(error);
        });
    });

  }

  summary(): string{
    return `${this.beers.length} / ${this.cache.length}`;
  }

  select(item: BeerModel): void {
    this.selection = item;
    console.log(this.selection.name);
  }

  scroll(event: any){
    console.log(`scrolled: ${event}`);
  }

  more():void{
    var start = this.beers.length;
    var end = this.beers.length + this.chunk;
    var slice = this.cache.slice(start, end);
    this.beers = this.beers.concat(slice);  

    this.loaded.next({found:this.summary()});
  }
}
