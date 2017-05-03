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

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    this.init();
  }

  public ngOnDestroy() {
    this.clear();
  }

  public init() {
    this.colcade = new Colcade(this.element.nativeElement, {
      columns: '.column',
      items: '.card, .brick'
    });
  }

  public clear() {
    if (this.colcade)
      this.colcade.destroy();
  }

  public reset() {
    this.clear();
    this.init();
  }

  public append(element: HTMLElement) {
    if (this.colcade)
      this.colcade.append(element);
  }
}
