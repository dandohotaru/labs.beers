import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[window-scroll]' })
export class WindowScrollDirective {
    
    constructor() { }

    /**
     * Produces an event having the source trigger
     */
    @Output()
    public scrolled: EventEmitter<{ source: string }> = new EventEmitter();

    private direction: "up" | "down";

    /**
     * Handles scrolling events when there are no scrollbars
     * @param event 
     */
    @HostListener("window:wheel", ["$event"])
    wheel(event: WheelEvent) {
        this.direction = event.deltaY > 0 
            ? "down"
            : "up";

        var context = {
            windowHeight: window.innerHeight,
            documentHeight: document.documentElement.clientHeight,
            bodyHeight: document.body.clientHeight,
            scrollTop: this.max(document.body, document.documentElement, (element)=> element.scrollTop),
            scrollHeight: this.max(document.body, document.documentElement, (element)=> element.scrollHeight),
            scrollDelta: event.deltaY,
        };

        var height = context.windowHeight
            || context.documentHeight
            || context.bodyHeight;
        var reach = context.scrollTop + height;
        var limit = context.scrollHeight - 100;

        if (reach >= limit && context.scrollDelta > 0 && context.scrollTop == 0) {
            this.scrolled.next({ source: "wheel" });
        }
    }

    /**
     * Handles scrolling events when there are scrollbars
     * @param event 
     */
    @HostListener('window:scroll', ['$event'])
    scroll(event) {

        var context = {
            windowHeight: window.innerHeight,
            documentHeight: document.documentElement.clientHeight,
            bodyHeight: document.body.clientHeight,
            scrollTop: this.max(event.target.body, event.target.documentElement, (element)=> element.scrollTop),
            scrollHeight: this.max(event.target.body, event.target.documentElement, (element)=> element.scrollHeight),
        };

        var height = context.windowHeight
            || context.documentHeight
            || context.bodyHeight;
        var reach = context.scrollTop + height;
        var limit = context.scrollHeight -100;

        if ((reach >= limit && this.direction && this.direction == "down") || (reach >= limit && !this.direction)) {
            this.scrolled.next({ source: "scroll" });
        }
    }

    private max(first: HTMLElement, second: HTMLElement, selector: (element: HTMLElement)=>number): number{
        let firstSize = selector(first);
        let secondSize = selector(second);
        return Math.max(firstSize, secondSize);
    }

    private height() {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }
}