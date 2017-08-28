import * as Bricklayer from 'bricklayer';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: 'cards.component.html',
    styleUrls: ['cards.component.css']
})
export class CardsComponent implements OnInit {
    @ViewChild('bricks') 
    bricks: ElementRef;

    bricklayer: Bricklayer;

    constructor() { }

    public ngOnInit() { }

    ngAfterViewInit() {
        //console.log(this.bricks.nativeElement);
        //this.bricklayer = new Bricklayer(this.bricks.nativeElement);
        //console.log(this.bricklayer);

        window.setTimeout(() => {
            this.bricklayer = new Bricklayer(this.bricks.nativeElement);
            console.log(this.bricklayer);
        }, 1);
    }

    newBox() {
        var randomColor = '#' + Math.random().toString(16).substr(-6);
        var heights = [50, 90, 150, 190, 230];
        var randomHeight = heights[Math.floor(Math.random() * heights.length)];
        var box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = randomColor;
        box.style.height = randomHeight + "px";
        return box;
    }

    addBrick() {
        var box = this.newBox();
        box.innerHTML = (this.bricklayer.elements.length + 1);
        this.bricklayer.append(box);
    }
}