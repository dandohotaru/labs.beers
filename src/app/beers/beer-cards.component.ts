import { Component, OnChanges, OnInit, Input, AfterViewInit } from '@angular/core';
import { ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { BeerData } from './../shared/services/beers.models';
import * as Colcade from 'colcade';

@Component({
  selector: 'beer-cards',
  templateUrl: './beer-cards.component.html',
  styleUrls: ['./beer-cards.component.css']
})
export class BeerCardsComponent implements OnChanges, OnInit, AfterViewInit {

  @Input()
  beers: BeerData;

  @ViewChild('myGrid')
  mygrid: ElementRef;

  private colcade = null;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    console.log('ngOnChanges');

    if (this.colcade)
    {
      this.colcade.reload();
      console.log('reload');
    }
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.arrange();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    //this.arrange();
  }

  arrange(): void{

    var options = {
      columns: ".grid-col",
      items: ".grid-item",
    };

    //this.colcade = new Colcade(this.mygrid.nativeElement, options);
    this.colcade = new Colcade(this.element.nativeElement, options);

  }

}
