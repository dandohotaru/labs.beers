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

  hidden: boolean;

  private colcade = null;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    console.log('ngOnChanges');

    this.hidden = true;
    setTimeout(p => {
      this.arrange();
      this.hidden = false;
    }, 0);

  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  arrange(): void {
    if (!this.colcade) {
      var options = {
        columns: ".grid-col",
        items: ".grid-item",
      };
      this.colcade = new Colcade(this.mygrid.nativeElement, options);
    }
    else {
      this.colcade.reload();
    }
  }
  
}
