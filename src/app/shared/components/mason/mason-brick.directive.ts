import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Inject, forwardRef } from '@angular/core';
import { MasonGridComponent } from './mason-grid.component';

@Directive({
  selector: '[colcade-grid-item], colcade-grid-item'
})
export class MasonBrickDirective implements AfterViewInit {

  constructor(
    @Inject(forwardRef(() => MasonGridComponent))
    private parent: MasonGridComponent,
    private element: ElementRef) { }

  ngAfterViewInit() {
    this.parent.append(this.element.nativeElement);
  }
}
