
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { BeerData } from 'app/shared/services/beers.models';
import { BeerModel } from "app/beers/beer.models";

@Component({
  selector: 'beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css'],

})
export class BeerItemComponent implements OnInit, OnChanges {

  @Input()
  beer: BeerModel;

  @Output()
  selected: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  select(): void {
    this.selected.next(this.beer);
  }
}
