import { Directive, Input, TemplateRef } from "@angular/core";

let nextId = 0;

@Directive({ selector: 'template[appSlide]' })
export class SlideDirective {

    @Input() id = `app-slide-${nextId++}`;
    constructor(public tplRef: TemplateRef<any>) { }
}