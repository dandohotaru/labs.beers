
//import * as Colcade from 'colcade';
import Colcade from 'colcade';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-colcade',
    templateUrl: 'colcade.html',
    styleUrls: ['./colcade.css']
})
export class ColcadeComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {

    @ViewChild("dummy") 
    dummy: ElementRef;

    @Input()
    data: { name: string, description: string }[];

    bricks: BrickModel[];

    colcade = null;

    constructor(private element: ElementRef) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges): void {
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

        console.log(this.bricks);

        setTimeout(p => {

            console.log("ngOnChanges: late");

            var grid = this.dummy.nativeElement.querySelector('.grid');
            this.colcade = new Colcade(grid, {
                columns: ".grid-col",
                items: ".grid-item",
            });

            

        }, 10);

        console.log("ngOnChanges");

    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
        console.log(this.dummy.nativeElement.querySelector('.grid'));

        
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");

        

    }
}

export class BrickModel {
    name: string;
    description: string;
    size: string;
}