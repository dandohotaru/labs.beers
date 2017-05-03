import { Directive, OnDestroy, AfterViewInit } from '@angular/core';
import { Inject, ElementRef, forwardRef } from '@angular/core';

import { WallComponent } from './wall.component';
import { WatcherService } from "./watch.service";

@Directive({
    selector: '[masonry-brick], masonry-brick'
})
export class BrickDirective implements OnDestroy, AfterViewInit {

    constructor(
        @Inject(forwardRef(() => WallComponent))
        private parent: WallComponent,
        private element: ElementRef,
        private watcher: WatcherService
    ) {
    }

    ngAfterViewInit() {
        this.parent.add(this.element.nativeElement);
        //this.watcher.watch(this.element.nativeElement, this.parent.layout);
    }

    ngOnDestroy() {
        this.parent.remove(this.element.nativeElement);
    }
}