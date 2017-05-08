import { Component, Directive, OnInit, Input, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-tooltip',
    templateUrl: 'tooltip.component.html'
})

export class TooltipComponent implements OnInit, AfterViewInit {

    @Input() testing: string;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        $('[data-toggle="tooltip"]').tooltip({ container: 'body', html: true });
    }
}