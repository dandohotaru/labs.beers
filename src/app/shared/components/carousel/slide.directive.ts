import { Directive, Input, TemplateRef } from "@angular/core";

let nextId = 0;

@Directive({ selector: 'template[app-carousel-slide]' })
export class SlideDirective {

    @Input() id = `app-carousel-slide-${nextId++}`;
    constructor(public tplRef: TemplateRef<any>) { }
}