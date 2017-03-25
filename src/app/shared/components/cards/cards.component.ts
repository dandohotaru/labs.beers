import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
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

    @ViewChild('myGrid')
    mygrid: ElementRef;

    hidden: boolean;

    private colcade = null;

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.hidden = true;
        setTimeout(p => {
            this.arrange();
            this.hidden = false;
        }, 0);
    }

    arrange(): void {
        if (!this.colcade) {    
            var options = {
                columns: ".grid-col",
                items: ".grid-card",
            };

            var grid = this.element.nativeElement.querySelector('.grid');
            this.colcade = new Colcade(grid, options);
        }
        else {
            this.colcade.reload();
        }
    }
}