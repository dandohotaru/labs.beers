
import * as Colcade from 'colcade';
import 'rxjs/add/operator/first';

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, AfterViewChecked, AfterContentInit, NgZone } from '@angular/core';


@Component({
    selector: 'app-colcade',
    templateUrl: 'colcade.html'
})
export class ColcadeComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild("dummy")
    dummy: ElementRef;

    @Input()
    data: { name: string, description: string }[];

    bricks: BrickModel[];

    colcade = null;

    constructor(private element: ElementRef, private zone: NgZone) { }

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");

        var sizes = ["a", "b", "c"];
        this.bricks = this.data.map(p => {
            var index = Math.floor(Math.random() * sizes.length);
            var size = sizes[index];
            var brick: BrickModel = {
                name: p.name,
                description: p.description,
                size: `size-${size}`,
            };
            return brick;
        });

        this.zone.onStable.first().subscribe(() => {
            console.log("onStable");

            if (!this.colcade) {
                var grid = this.dummy.nativeElement;
                this.colcade = new Colcade(grid, {
                    columns: ".grid-col",
                    items: ".grid-item",
                });
            }
            this.colcade.reload();
        });

    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }
}

export class BrickModel {
    name: string;
    description: string;
    size: string;
}