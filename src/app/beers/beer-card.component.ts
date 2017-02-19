
import { Component, OnInit, Input } from '@angular/core';
import { Beer } from './../shared/services/beers.models';

@Component({
  selector: 'beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css'],
  
})
export class BeerCardComponent implements OnInit {

  @Input()
  beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
