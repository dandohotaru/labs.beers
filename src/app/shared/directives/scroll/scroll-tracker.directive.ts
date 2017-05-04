import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[scroll-tracker]' })
export class ScrollTrackerDirective {
    constructor() { }

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        let tracker = event.target;

        let limit = tracker.scrollHeight - tracker.clientHeight;
        console.log(event.target.scrollTop, limit);
        if (event.target.scrollTop === limit) {
            console.warn('end reached');
        }
    }
}