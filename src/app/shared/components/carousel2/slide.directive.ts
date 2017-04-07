import { Directive, Input, TemplateRef } from "@angular/core";

let nextId = 0;

@Directive({ selector: 'template[ngbSlide]' })
export class NgbSlide {

    @Input() id = `ngb-slide-${nextId++}`;
    constructor(public tplRef: TemplateRef<any>) { }
}