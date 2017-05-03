declare var imagesLoaded: any;

import * as masonry from 'masonry-layout';
import { Component, OnInit, OnDestroy, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { WallOptions } from './wall.options';

@Component({
    selector: '[masonry], masonry',
    templateUrl: './wall.component.html',
    styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit, OnDestroy {

    constructor(private element: ElementRef) { 
    }

    masonry: any;

    @Input() 
    options: WallOptions;

    @Input() 
    useImagesLoaded: Boolean = false;

    @Output() 
    layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output() 
    removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

    ngOnInit() {
        if (!this.options) 
            this.options = {};

        if (!this.options.itemSelector) {
            this.options.itemSelector = '[masonry-brick], masonry-brick';
        }

        if (this.element.nativeElement.tagName === 'MASONRY') {
            this.element.nativeElement.style.display = 'block';
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
            if (this.masonry)
                this.masonry.layout();
        });
    }

    public add(element: HTMLElement) {

        var isFirstItem = false;

        // Check if first item
        if (this.masonry.items.length == 0) {
            isFirstItem = true;
        }

        if (this.useImagesLoaded) {
            imagesLoaded(element, (instance: any) => {
                this.element.nativeElement.appendChild(element);

                // Tell Masonry that a child element has been added
                this.masonry.appended(element);

                // layout if first item
                if (isFirstItem) this.layout();
            });

            this.element.nativeElement.removeChild(element);
        }
        else {
            // Tell Masonry that a child element has been added
            this.masonry.appended(element);

            // layout if first item
            if (isFirstItem) this.layout();
        }
    }

    public remove(element: HTMLElement) {
        this.masonry.remove(element);
        this.layout();
    }
}