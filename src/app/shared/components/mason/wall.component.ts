import * as Colcade from 'colcade';
import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, ContentChildren, QueryList, NgZone, AfterContentInit, Renderer } from '@angular/core';
import { BrickDirective } from "app/shared/components/mason/brick.directive";

@Component({
  selector: 'app-wall',
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.css"]
})
export class WallComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {

  private colcade = null;

  @ContentChildren(BrickDirective)
  descendants: QueryList<BrickDirective>;

  constructor(private element: ElementRef, private zone: NgZone, private renderer: Renderer) { }

  public ngOnInit() {
  }

  public ngAfterViewInit() {

    this.descendants.changes.subscribe((changes: QueryList<BrickDirective>) => {
      changes.forEach(p => {
        let native = p.element.nativeElement;
        this.renderer.setElementClass(native, "brick", true);
        this.append(native);
      });
      this.init();
    });
  }

  ngAfterContentInit(): void {
  }

  public ngOnDestroy() {
    this.clear();
  }

  public init() {
    this.colcade = new Colcade(".wall", {
      columns: '.column',
      items: '.brick'
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
