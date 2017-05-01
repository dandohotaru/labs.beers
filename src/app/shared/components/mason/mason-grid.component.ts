import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as Colcade from 'colcade';

@Component({
  selector: '[colcade-grid], colcade-grid',
  template: `<ng-content></ng-content>`
})
export class MasonGridComponent implements OnInit, AfterViewInit, OnDestroy {

  private colcade = null;

  constructor(private element: ElementRef) { }

  ngOnInit() {


    this.colcade = new Colcade(this.element.nativeElement, {
      columns: '[colcade-grid-col], colcade-grid-col',
      items: '[colcade-grid-item], colcade-grid-item'
    });
  }

  ngAfterViewInit() {
    console.log('afterviewinit');
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
