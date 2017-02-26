import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit, OnChanges {

    @Input()
    items: any;

    @ContentChild(TemplateRef)
    template: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
}