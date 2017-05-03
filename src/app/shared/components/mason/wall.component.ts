import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as Colcade from 'colcade';

@Component({
  selector: '[colcade-grid], colcade-grid',
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.css"]
})
export class WallComponent implements OnInit, AfterViewInit, OnDestroy {

  private colcade = null;

  constructor(private element: ElementRef) { }

  ngOnInit() {


    this.colcade = new Colcade(this.element.nativeElement, {
      columns: '.wall-col',
      items: '.wall-brick'
    });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    if (this.colcade) {
      this.colcade.destroy();
    }
  }

  append(element: HTMLElement) {
    console.log('append');
    this.colcade.append(element);
  }
}
