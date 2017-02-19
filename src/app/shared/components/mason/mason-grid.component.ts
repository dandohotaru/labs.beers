import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MasonGridOptions } from './mason-grid.options';
import * as Colcade from 'colcade';

@Component({
  selector: '[colcade-grid], colcade-grid',
  template: `<ng-content></ng-content>`
})
export class MasonGridComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  public options: MasonGridOptions;

  private colcade = null;

  constructor(private element: ElementRef) { }

  ngOnInit() {

    if (!this.options) {
      this.options = {};
    }

    if (!this.options.columns) {
      this.options.columns = '[colcade-grid-col], colcade-grid-col';
    }

    if (!this.options.items) {
      this.options.items = '[colcade-grid-item], colcade-grid-item';
    }

    this.colcade = new Colcade(this.element.nativeElement, this.options);
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
