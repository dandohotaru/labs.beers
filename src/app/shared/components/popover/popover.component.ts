declare var $: any;
import 'bootstrap';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'app-popover',
    templateUrl: 'popover.component.html',
})

export class PopoverComponent implements OnInit {

    @Input()
    public sample:string;

    @Input()
    public title:string;

    @Input()
    public content:string;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        var options = {
            placement: 'bottom',
            toggle: 'popover',
            html: true,
            title: this.title,
            content: this.content,
        }; 

        //$(this.element.nativeElement).popover(options);
        $("#abc").popover(options);
        
    }
}