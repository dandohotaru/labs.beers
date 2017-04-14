import { BreweryData } from './../shared/services/breweries.models';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.css']
})
export class BreweryCardComponent implements OnInit {

  @Input()
  brewery: BreweryData;

  @Output()
  selected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    console.log(this.brewery.name);
    this.selected.next(this.brewery);
  }

  favorite(event: any): void {
    event.preventDefault();
    // ToDo: Implement feature
  }

}
