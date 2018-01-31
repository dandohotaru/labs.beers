import { Directive, Input, TemplateRef } from "@angular/core";

let nextId = 0;

@Directive({ selector: 'ng-template[appcarouselslide]' })
export class SlideDirective {

    @Input() 
    id = `app-carousel-slide-${nextId++}`;

    constructor(public template: TemplateRef<any>) { }
}