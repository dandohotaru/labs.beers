
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { EventAggregator } from "app/shared/messages/event.aggregator";
import { BreweryData } from "app/shared/services/breweries.models";

@Component({
    selector: 'brewery-filter',
    templateUrl: 'brewery-filter.component.html'
})

export class BreweryFilterComponent implements OnInit {

    constructor(private mediator: EventAggregator) { }

    ngOnInit() { 
        this.mediator.subscribe("breweriesChanged", (event: BreweryData[]) => {
            this.organicLoad(event);
        });
    }

    public organic: { value: string, text: string }[] = [];
    public organicLoad(data: BreweryData[]){
        this.organic = data
            .reduce((results: { value: string, text: string }[], current) => {
                if (!current.isOrganic)
                    return results;
                var found = results.find(p => p.value == current.isOrganic);
                if (!found) {
                    results.push({
                        value: current.isOrganic,
                        text: current.isOrganic,
                    });
                }
                return results;
            }, [])
            .sort((a, b) => a.text.localeCompare(b.text));
        this.organic.unshift({ value: "*", text: "ALL" });
    }
    public organicChanged(event: { value: string, text: string }) {
        if (event.value == "*")
            this.mediator.publish("organicCleared");
        else
            this.mediator.publish("organicChanged", { value: event.value });
    }

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
            this.mediator.publish("beforeChanged", { value: event.value });
    }

    @Input()
    public letters: { value: string, text: string }[] = [];
    public lettersChanged(event: { value: string, text: string }) {
        if (event.value == "*")
            this.mediator.publish("lettersCleared");
        else
            this.mediator.publish("lettersChanged", { value: event.value });
    }

    @Input()
    public length: { value: number, text: string }[] = [];
    public lengthChanged(event: { value: number, text: string }) {
        if (event.value == 0)
            this.mediator.publish("lengthCleared");
        else
            this.mediator.publish("lengthChanged", { value: event.value });
    }
}