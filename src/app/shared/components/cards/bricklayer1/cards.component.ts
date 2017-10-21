import * as Bricklayer from 'bricklayer';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class CardsComponent implements OnInit {
    
    @ViewChild('container') 
    public container: ElementRef;

    public builder: Bricklayer;

    constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        window.setTimeout(() => {
            this.builder = new Bricklayer(this.container.nativeElement);
            console.log(this.builder);
        }, 0);
    }

    public newBox() {
        var randomColor = '#' + Math.random().toString(16).substr(-6);
        var heights = [50, 90, 150, 190, 230];
        var randomHeight = heights[Math.floor(Math.random() * heights.length)];
        var box = document.createElement('div');
        box.className = 'card';
        box.style.backgroundColor = randomColor;
        box.style.height = randomHeight + "px";
        return box;
    }

    public addBrick() {
        var box = this.newBox();
        box.innerHTML = (this.builder.elements.length + 1);
        this.builder.append(box);
    }
}