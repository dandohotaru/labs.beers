import { Component, HostBinding, OnDestroy, Input, OnInit } from '@angular/core';

import { CarouselComponent } from './carousel.component';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html'
})
export class SlideComponent implements OnInit, OnDestroy {

  @HostBinding('class.active')
  @Input() 
  public active:boolean;

  @HostBinding('class.item')
  @HostBinding('class.carousel-item')
  public addClass:boolean = true;

  protected carousel:CarouselComponent;

  public constructor(carousel:CarouselComponent) {
    this.carousel = carousel;
  }

  public ngOnInit():void {
    this.carousel.addSlide(this);
  }

  public ngOnDestroy():void {
    this.carousel.removeSlide(this);
  }
}