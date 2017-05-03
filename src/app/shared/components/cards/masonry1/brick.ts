interface MutationWindow extends Window {
    MutationObserver: any;
    WebKitMutationObserver: any;
}

declare var window: MutationWindow;

import { Directive, Inject, ElementRef, forwardRef, OnDestroy, AfterViewInit } from '@angular/core';

import { WallComponent } from './masonry';

@Directive({
    selector: '[masonry-brick], masonry-brick'
})
export class BrickDirective implements OnDestroy, AfterViewInit {

    constructor(
        @Inject(forwardRef(() => WallComponent))
        private parent: WallComponent,
        private element: ElementRef,
    ) {
    }

    ngAfterViewInit() {
        this.parent.add(this.element.nativeElement);
        this.watchForHtmlChanges();
    }

    ngOnDestroy() {
        this.parent.remove(this.element.nativeElement);
    }

    /** When HTML in brick changes dinamically, observe that and change layout */
    private watchForHtmlChanges(): void {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        if (MutationObserver) {
            /** Watch for any changes to subtree */
            let self = this;
            let observer = new MutationObserver(function (mutations, observerFromElement) {
                self.parent.layout();
            });

            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this.element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    }
}
