import { Component, OnInit, Input } from '@angular/core';

import { BeerData } from './../shared/services/beers.models';

@Component({
  selector: 'beer-cards',
  templateUrl: './beer-cards.component.html',
  styleUrls: ['./beer-cards.component.css']
})
export class BeerCardsComponent implements OnInit {

  @Input()
  beers: BeerData;

  constructor() { }

  ngOnInit() {
  }

}
