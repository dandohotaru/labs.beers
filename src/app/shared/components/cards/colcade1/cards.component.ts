import { Component, OnInit, OnChanges, SimpleChanges, NgZone, OnDestroy } from '@angular/core';
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

    constructor(private zone: NgZone) {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.zone.onStable.first().subscribe(() => {
            this.arrange();
        });
    }

    arrange(): void {
        if (this.colcade)
            this.colcade.destroy();

        //if (!this.colcade) {
            this.colcade = new Colcade(this.grid.nativeElement, {
                columns: ".grid-col",
                items: ".grid-item",
            });
        //}

        this.colcade.reload();
    }
}