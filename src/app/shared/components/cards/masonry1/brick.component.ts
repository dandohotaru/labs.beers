import { Directive, OnDestroy, AfterViewInit } from '@angular/core';
import { Inject, ElementRef, forwardRef, Component } from '@angular/core';

import { WallComponent } from './wall.component';
import { WatcherService } from "./watch.service";

@Component({
    selector: 'mason-brick',
    templateUrl: './brick.component.html',
    styleUrls: ['./brick.component.css']
})
export class BrickComponent implements OnDestroy, AfterViewInit {

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
