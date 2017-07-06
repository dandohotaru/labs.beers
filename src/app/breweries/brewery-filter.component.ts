import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventAggregator } from "app/shared/messages/event.aggregator";

@Component({
    selector: 'brewery-filter',
    templateUrl: 'brewery-filter.component.html'
})

export class BreweryFilterComponent implements OnInit {

    constructor(private mediator: EventAggregator) { }

    ngOnInit() { }

    @Input()
    public years: { value: number, text: number }[] = [];
    public yearChanged(event: { value: number, text: number }) {
        this.mediator.publish("yearChanged", event);
    }

    @Input()
    public after: { value: number, text: string }[] = [];
    public afterChanged(event: { value: number, text: string }) {
        this.mediator.publish("afterChanged", event);
    }

    @Input()
    public before: { value: number, text: string }[] = [];
    public beforeChanged(event: { value: number, text: string }) {
        this.mediator.publish("beforeChanged", event);
    }
}

