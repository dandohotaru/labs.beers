declare var $: any;
import 'bootstrap';
import { Component, Directive, OnDestroy } from '@angular/core';
import { OnInit, Input, AfterViewInit } from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[app-tooltip]'
})
export class TooltipDirective implements OnInit, AfterViewInit, OnDestroy {
    
    @Input() 
    title: string;

    @Input() 
    template: string;

    @Input() 
    placement: "top" | "bottom" | "left" | "right";

    constructor(private element: ElementRef, private renderer: Renderer) { 
    }

    ngOnInit() { 
    }

    ngAfterViewInit() {
        var options = {
            html: true,
            placement: this.placement,
            template: this.template,
            title: this.title,
        };

        this.renderer.setElementAttribute(this.element.nativeElement, "data-toggle", "tooltip");
        $(this.element.nativeElement).tooltip(options);
    }

    ngOnDestroy(): void {
        $(this.element.nativeElement).tooltip('destroy')
    }
}