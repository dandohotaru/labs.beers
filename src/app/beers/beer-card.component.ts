import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { BeerData } from 'app/shared/services/beers.models';
import { BeerModel, LegendModel } from "app/beers/beer.models";

@Component({
  selector: 'beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css'],

})
export class BeerCardComponent implements OnInit, OnChanges {

  @Input()
  beer: BeerModel;

  @Output()
  selected: EventEmitter<any> = new EventEmitter();

  legend: LegendModel;

  constructor() {
  }

  ngOnInit() {
    this.legend = {
      abv: "Alcohol By Volume: how much alcohol is in each brew",
      ibu: "International Bitterness Units: the bitterness from hops in a beer on a scale of 0 to 100",
      srm: "Color system used by brewers to specify finished beer and malt color"
    };
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  select(): void {
    this.selected.next(this.beer);
  }

  favorite(event: any): void {
    event.preventDefault();
    var value = !this.beer.favorite;
    var text = value ? "favorite" : "not favorite";
    this.beer.favorite = value;

    console.log(`${this.beer.name} is marked as ${text}`);
  }
}


