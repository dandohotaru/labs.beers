import * as masonry from 'masonry-layout';
import { Component, OnInit, OnDestroy, Input, Output, ElementRef, EventEmitter, Renderer } from '@angular/core';
import { WallOptions } from './wall.options';

@Component({
    selector: 'masonry',
    templateUrl: './wall.component.html',
    styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit, OnDestroy {

    constructor(private element: ElementRef, private renderer: Renderer) { 
    }

    masonry: any;

    @Input() 
    options: WallOptions;

    @Output() 
    layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output() 
    removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

    ngOnInit() {
        if (!this.options) 
            this.options = {};

        if (!this.options.itemSelector) {
            this.options.itemSelector = 'masonry-brick';
        }

        if (!this.options.transitionDuration) {
            this.options.transitionDuration = '0.5s';
        }

        this.masonry = new masonry(this.element.nativeElement, this.options);
        
        this.masonry.on('layoutComplete', (items: any) => {
            this.layoutComplete.emit(items);
        });
        
        this.masonry.on('removeComplete', (items: any) => {
            this.removeComplete.emit(items);
        });
    }

    ngOnDestroy() {
        if (this.masonry) {
            this.masonry.destroy();
        }
    }

    public layout() {
        setTimeout(() => {
            this.masonry.layout();
        });
    }

    public add(element: HTMLElement) {
        var first = false;
        if (this.masonry.items.length == 0) {
            first = true;
        }

        this.masonry.appended(element);

        if (first) 
            this.layout();
    }

    public remove(element: HTMLElement) {
        this.masonry.remove(element);
        this.layout();
    }
}