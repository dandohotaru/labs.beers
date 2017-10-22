
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    public sentences: SentenceData[];
    public selection: SentenceData;

    constructor() { }

    public ngOnInit() {
        this.sentences = data
            .split(".")
            .map(sentence => {
                return {
                    text: sentence,
                    length: sentence.length,
                    words: sentence.split(" ").length - 1,
                };
            })
    }

    public select(sentence: SentenceData){ 
        console.log(sentence.text);
        this.selection = sentence;
        this.remove();
    }

    public add(){

    }

    public remove() {
        if (this.selection){
            console.log(`Before: ${this.sentences.length}`);
            let index = this.sentences.indexOf(this.selection);
            this.sentences.splice(index, 1);
            console.log(`After: ${this.sentences.length}`);
        }

    }
}

export interface SentenceData {
    text: string,
    legth?: number,
    words?: number,
}

export var data: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper quis lectus nulla at volutpat diam ut. Egestas purus viverra accumsan in. Elit pellentesque habitant morbi tristique senectus et netus et. Habitant morbi tristique senectus et netus. Odio morbi quis commodo odio. Congue mauris rhoncus aenean vel elit scelerisque. Eros in cursus turpis massa. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Feugiat in ante metus dictum at tempor. Hendrerit gravida rutrum quisque non tellus orci. Ut lectus arcu bibendum at. Fusce id velit ut tortor. Ac turpis egestas integer eget aliquet nibh. Malesuada pellentesque elit eget gravida cum. Tortor id aliquet lectus proin nibh nisl condimentum id. Vitae ultricies leo integer malesuada nunc vel risus. Dignissim enim sit amet venenatis urna cursus eget nunc. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Aliquet porttitor lacus luctus accumsan tortor posuere.`;