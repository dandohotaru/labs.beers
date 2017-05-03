import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Inject, forwardRef } from '@angular/core';
import { WallComponent } from './wall.component';

@Directive({
  selector: '[colcade-grid-item], colcade-grid-item'
})
export class BrickDirective implements AfterViewInit {

  constructor(
    @Inject(forwardRef(() => WallComponent))
    private parent: WallComponent,
    private element: ElementRef) { }

  ngAfterViewInit() {
    this.parent.append(this.element.nativeElement);
  }
}
