import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';

export enum Direction { UNKNOWN, NEXT, PREV }


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnDestroy {
  protected _currentActiveSlide: number;

  @Output() public activeSlideChange: EventEmitter<any> = new EventEmitter<any>(false);

  @Input()
  public set activeSlide(index: number) {
    if (this._slides.length && index !== this._currentActiveSlide) {
      this._select(index);
    }
  }
  public get activeSlide(): number {
    return this._currentActiveSlide;
  }

  protected _interval: number;

  @Input()
  public get interval(): number {
    return this._interval;
  }
  public set interval(value: number) {
    this._interval = value;
    this.restartTimer();
  }

  protected _slides: SlideComponent[] = [];
  public get slides(): SlideComponent[] {
    return this._slides;
  }

  protected currentInterval: any;
  protected isPlaying: boolean;
  protected destroyed: boolean = false;

  public constructor(config: CarouselConfig) {
    Object.assign(this, config);
  }

  public ngOnDestroy(): void {
    this.destroyed = true;
  }

  public addSlide(slide: SlideComponent): void {
    this._slides.push(slide);
    if (this._slides.length === 1) {
      this._currentActiveSlide = void 0;
      this.activeSlide = 0;
      this.play();
    }
  }

  public removeSlide(slide: SlideComponent): void {
    const remIndex = this._slides.indexOf(slide);

    if (this._currentActiveSlide === remIndex) {

      // removing of active slide
      let nextSlideIndex: number = void 0;
      if (this._slides.length > 1) {
        // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
        // in case, if this slide in middle of collection, index of next slide is same to removed
        nextSlideIndex = !this.isLast(remIndex) 
          ? remIndex : remIndex - 1;
      }
      this._slides.splice(remIndex);

      // prevents exception with changing some value after checking
      setTimeout(() => {
        this._select(nextSlideIndex);
      }, 0);
    } else {
      this._slides.splice(remIndex);
      const currentSlideIndex = this.getCurrentSlideIndex();
      setTimeout(() => {
        // after removing, need to actualize index of current active slide
        this._currentActiveSlide = currentSlideIndex;
        this.activeSlideChange.emit(this._currentActiveSlide);
      }, 0);

    }
  }

  public nextSlide(force: boolean = false): void {
    this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
  }

  public previousSlide(force: boolean = false): void {
    this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
  }

  public selectSlide(index: number): void {
    this.activeSlide = index;
  }

  public play(): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }

  public pause(): void {
    this.isPlaying = false;
    this.resetTimer();
  }

  public getCurrentSlideIndex(): number {
    return this._slides.findIndex((slide: SlideComponent) => slide.active);
  }

  public isLast(index: number): boolean {
    return index + 1 >= this._slides.length;
  }

  private findNextSlideIndex(direction: Direction, force: boolean): number {
    let nextSlideIndex: number = 0;

    switch (direction) {
      case Direction.NEXT:
        // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
        nextSlideIndex = !this.isLast(this._currentActiveSlide)
          ? this._currentActiveSlide + 1 
          : 0;
        break;
      case Direction.PREV:
        // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
        nextSlideIndex = this._currentActiveSlide > 0
          ? this._currentActiveSlide - 1 
          : this._slides.length - 1;
        break;
      default:
        throw new Error('Unknown direction');
    }
    return nextSlideIndex;
  }

  private _select(index: number): void {
    if (isNaN(index)) {
      this.pause();
      return;
    }
    let currentSlide = this._slides[this._currentActiveSlide];
    if (currentSlide) {
      currentSlide.active = false;
    }
    let nextSlide = this._slides[index];
    if (nextSlide) {
      this._currentActiveSlide = index;
      nextSlide.active = true;
      this.activeSlide = index;
      this.activeSlideChange.emit(index);
    }
  }

  private restartTimer(): any {
    this.resetTimer();
    let interval = +this.interval;
    if (!isNaN(interval) && interval > 0) {
      this.currentInterval = setInterval(
        () => {
          let nInterval = +this.interval;
          if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
            this.nextSlide();
          } else {
            this.pause();
          }
        },
        interval);
    }
  }

  private resetTimer(): void {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = void 0;
    }
  }
}