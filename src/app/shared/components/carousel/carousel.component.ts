import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { Input, ContentChildren, QueryList } from '@angular/core';

import { CarouselConfig } from './carousel.config';
import { SlideDirective } from "./slide.directive";

@Component({
    selector: 'app-carousel',
    exportAs: 'appCarousel',
    host: {
        'class': 'carousel slide',
        '[style.display]': '"block"',
        'tabIndex': '0',
        '(mouseenter)': 'pause()',
        '(mouseleave)': 'cycle()',
        '(keydown.arrowLeft)': 'keyPrev()',
        '(keydown.arrowRight)': 'keyNext()'
    },
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements AfterContentChecked, OnDestroy, OnInit {

    private timerInterval;

    @ContentChildren(SlideDirective)
    slides: QueryList<SlideDirective>;

    @Input()
    interval: number;

    @Input()
    wrap: boolean;

    @Input()
    keyboard: boolean;

    @Input()
    activeId: string;

    constructor(config: CarouselConfig) {
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }

    public ngAfterContentChecked() {
        let activeSlide = this.getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    }

    public ngOnInit() { 
        this.startTimer(); 
    }

    public ngOnDestroy() { 
        clearInterval(this.timerInterval); 
    }

    public select(slideId: string) {
        this.cycleToSelected(slideId);
        this.restartTimer();
    }

    public prev() {
        this.cycleToPrev();
        this.restartTimer();
    }

    public next() {
        this.cycleToNext();
        this.restartTimer();
    }

    public pause() {
        this.stopTimer();
    }

    public cycle() {
        this.startTimer();
    }

    public cycleToNext() {
        this.cycleToSelected(this.getNextSlide(this.activeId));
    }

    public cycleToPrev() {
        this.cycleToSelected(this.getPrevSlide(this.activeId));
    }

    public cycleToSelected(slideIdx: string) {
        let selectedSlide = this.getSlideById(slideIdx);
        if (selectedSlide) {
            this.activeId = selectedSlide.id;
        }
    }

    public keyPrev() {
        if (this.keyboard) {
            this.prev();
        }
    }

    public keyNext() {
        if (this.keyboard) {
            this.next();
        }
    }

    private restartTimer() {
        this.stopTimer();
        this.startTimer();
    }

    private startTimer() {
        if (this.interval > 0) {
            this.timerInterval = setInterval(() => { this.cycleToNext(); }, this.interval);
        }
    }

    private stopTimer() {
        clearInterval(this.timerInterval);
    }

    private getSlideById(slideId: string): SlideDirective {
        let slideWithId: SlideDirective[] = this.slides.filter(slide => slide.id === slideId);
        return slideWithId.length ? slideWithId[0] : null;
    }

    private getSlideIndexById(slideId: string): number {
        return this.slides.toArray().indexOf(this.getSlideById(slideId));
    }

    private getNextSlide(currentSlideId: string): string {
        const slideArr = this.slides.toArray();
        const currentSlideIdx = this.getSlideIndexById(currentSlideId);
        const isLastSlide = currentSlideIdx === slideArr.length - 1;

        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    }

    private getPrevSlide(currentSlideId: string): string {
        const slideArr = this.slides.toArray();
        const currentSlideIdx = this.getSlideIndexById(currentSlideId);
        const isFirstSlide = currentSlideIdx === 0;

        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    }
}