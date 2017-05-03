import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as Colcade from 'colcade';

@Component({
  selector: 'app-wall',
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.css"]
})
export class WallComponent implements OnInit, AfterViewInit, OnDestroy {

  private colcade = null;

  constructor(private element: ElementRef) { }

  ngOnInit() {

    this.colcade = new Colcade(this.element.nativeElement, {
      columns: '.wall-col',
      items: '.card'
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
