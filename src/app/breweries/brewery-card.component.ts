import { BreweryData } from './../shared/services/breweries.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.css']
})
export class BreweryCardComponent implements OnInit {

  @Input()
  brewery: BreweryData;

  constructor() { }

  ngOnInit() {
  }

  favorite(event: any): void {
    event.preventDefault();
    // ToDo: Implement feature
  }

}
