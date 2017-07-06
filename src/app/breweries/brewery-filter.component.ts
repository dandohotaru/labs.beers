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
        if (event)
            this.mediator.publish(new YearFilterChanged(event.value));
        else
            this.mediator.publish(new YearFilterCleared);
    }

    @Input()
    public after: { value: number, text: string }[] = [];
    public afterChanged(event: { value: number, text: string }) {
        if (event)
            this.mediator.publish(new AfterFilterChanged(event.value));
        else
            this.mediator.publish(new AfterFilterCleared());
    }

    @Input()
    public before: { value: number, text: string }[] = [];
    public beforeChanged(event: { value: number, text: string }) {
        if (event)
            this.mediator.publish(new BeforeFilterChanged(event.value));
        else
            this.mediator.publish(new BeforeFilterCleared());
    }
}

export class YearFilterChanged {
    name: string = "YearFilterChanged";
    constructor(public value: number) { };
}

export class YearFilterCleared {
    name: string = "YearFilterCleared";
}

export class AfterFilterChanged {
    name: string = "AfterFilterChanged";
    constructor(public value: number) { };
}

export class AfterFilterCleared {
    name: string = "AfterFilterCleared";
}

export class BeforeFilterChanged {
    name: string = "BeforeFilterChanged";
    constructor(public value: number) { };
}

export class BeforeFilterCleared {
    name: string = "BeforeFilterCleared";
}

