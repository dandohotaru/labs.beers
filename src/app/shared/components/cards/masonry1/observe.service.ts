declare var window: MutationWindow;
import { Injectable } from '@angular/core';

@Injectable()
export class WatcherService {

    constructor() { }

    public watch(element: HTMLElement, handle: () => void): void {
        // When HTML in brick changes dinamically, observe that and change layout
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            // Watch for any changes to subtree
            let self = this;
            let observer = new MutationObserver(function (mutations, observerFromElement) {
                handle();
            });

            // Define what element should be observed by the observer
            // Define what types of mutations trigger the callback
            observer.observe(element, {
                subtree: true,
                childList: true
            });
        }
    }
}

interface MutationWindow extends Window {
    MutationObserver: any;
    WebKitMutationObserver: any;
}