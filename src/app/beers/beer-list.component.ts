import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeersService } from './../shared/services/beers.service';
import { BeerData } from './../shared/services/beers.models';
import { BeerModel } from "./beer.models";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  term: string;
  chunk: number = 4;
  cache: BeerModel[] = [];
  beers: BeerModel[] = [];
  selection: BeerModel;

  @Input()
  images: boolean = true;

  @Output()
  loaded: EventEmitter<{ found: string }> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BeersService)
  { }

  ngOnInit() {

    this.route.queryParams.subscribe(p => {
      this.term = p["q"] || "";

      var beers = this.service
        .search(this.term)
        .subscribe(beers => {

          var models = beers
            .map(p => {
              var beer: BeerModel = {
                id: p.id,
                name: p.nameDisplay,
                style: p.style ? p.style.name : "N/A",
                label: p.labels ? p.labels.medium : "./assets/img/beer-generic.jpg",
                description: p.description ? p.description : "N/A",
                abv: p.abv,
                ibu: p.ibu,
                favorite: false,
              };
              return beer;
            })
            .sort((a, b) => a.name.localeCompare(b.name));

          this.cache = models;
          this.beers = models.slice(0, this.chunk);
          this.loaded.next({ found: this.summary() });
        },
        error => {
          console.error(error);
        });
    });

  }

  summary(): string {
    return `${this.beers.length} / ${this.cache.length}`;
  }

  select(item: BeerModel): void {
    this.selection = item;
  }

  scroll(event: any) {
    //console.log(`scrolled: ${event}`);

  }

  onScroll() {
    //console.log('scrolled!!');
    this.more();

  }

  more(): void {
    var start = this.beers.length;
    var end = this.beers.length + this.chunk;
    var slice = this.cache.slice(start, end);
    this.beers = this.beers.concat(slice);
    this.loaded.next({ found: this.summary() });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {

    var context = {
      windowHeight: window.innerHeight,
      documentHeight: document.documentElement.clientHeight,
      bodyHeight: document.body.clientHeight,
      scrollTop: event.target.scrollingElement.scrollTop,
      scrollHeight: event.target.scrollingElement.scrollHeight,
    };

    var height = context.windowHeight || context.documentHeight || context.bodyHeight;
    var reach = context.scrollTop + height;
    var limit = context.scrollHeight - 100;

    if (reach >= limit) {
      console.info("scroll with scrollbars");
      this.more();
    }

  }

  @HostListener("window:wheel", ["$event"])
  onWheelScroll(event: WheelEvent) {

    var context = {
      windowHeight: window.innerHeight,
      documentHeight: document.documentElement.clientHeight,
      bodyHeight: document.body.clientHeight,
      scrollTop: document.documentElement.scrollTop,
      scrollHeight: document.documentElement.scrollHeight,
      scrollDelta: event.deltaY,
    };

    var height = context.windowHeight || context.documentHeight || context.bodyHeight;
    var reach = context.scrollTop + height;
    var limit = context.scrollHeight - 100;

    if (reach >= limit && context.scrollDelta > 0 && context.scrollTop == 0) {
      console.info("scroll without scrollbars");
      this.more();
    }
  }

  height() {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }


}
