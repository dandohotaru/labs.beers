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
        if (event.value == 0)
            this.mediator.publish("yearCleared");
        else
            this.mediator.publish("yearChanged", { value: event.value });
    }

    @Input()
    public after: { value: number, text: string }[] = [];
    public afterChanged(event: { value: number, text: string }) {
        if (event.value == 0)
            this.mediator.publish("afterCleared");
        else
            this.mediator.publish("afterChanged", { value: event.value });
    }

    @Input()
    public before: { value: number, text: string }[] = [];
    public beforeChanged(event: { value: number, text: string }) {
        if (event.value == 0)
            this.mediator.publish("beforeCleared");
        else
            this.mediator.publish("beforeChanged", { value: event.value + 100 });
    }
}