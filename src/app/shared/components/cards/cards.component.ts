import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Input, ContentChild, TemplateRef } from '@angular/core';
import * as Colcade from 'colcade';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnChanges {

    @Input()
    items: any;

    @ContentChild(TemplateRef)
    template: TemplateRef<any>;

    @ViewChild('grid')
    grid: ElementRef;

    hidden: boolean;
    colcade: Colcade;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        //this.hidden = true;
        setTimeout(p => {
            this.arrange();
            //this.hidden = false;
        }, 0);
    }

    arrange(): void {
        if (!this.colcade) {    
            
            this.colcade = new Colcade(this.grid.nativeElement, {
                columns: ".grid-col",
                items: ".grid-item",
            });
        }
        
        this.colcade.reload();
    }
}