
import { Component, OnInit, Input } from '@angular/core';
import { BeerData } from './../shared/services/beers.models';

@Component({
  selector: 'beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css'],

})
export class BeerCardComponent implements OnInit {

  @Input()
  beer: BeerData;

  legend: { abv: string, ibu: string, srm: string };

  constructor() { }

  ngOnInit() {
    this.legend = {
      abv: "Alcohol By Volume: how much alcohol is in each brew",
      ibu: "International Bitterness Units: the bitterness from hops in a beer on a scale of 0 to 100",
      srm: "Color system used by brewers to specify finished beer and malt color"
    };
  }

}
