
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
            this.yearsLoad(event);
            this.afterLoad(event);
            this.beforeLoad(event);
            this.lettersLoad(event);
            this.lengthLoad(event);
        });
    }

    public organic: { value: string, text: string }[] = [];
    public organicLoad(data: BreweryData[]) {
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

    public years: { value: number, text: string }[] = [];
    public yearsLoad(data: BreweryData[]) {
        this.years = data
            .reduce((results: { value: number, text: string }[], current) => {
                if (!current.established)
                    return results;
                var found = results.find(p => p.value == current.established);
                if (!found) {
                    results.push({
                        value: current.established,
                        text: current.established.toString(),
                    });
                }
                return results;
            }, [])
            .sort((a, b) => a.value - b.value);
        this.years.unshift({ value: 0, text: "ALL" });
    }
    public yearChanged(event: { value: number, text: number }) {
        if (event.value == 0)
            this.mediator.publish("yearCleared");
        else
            this.mediator.publish("yearChanged", { value: event.value });
    }

    public after: { value: number, text: string }[] = [];
    public afterLoad(data: BreweryData[]) {
        this.after = data
            .reduce((results: { value: number, text: string }[], current) => {
                if (!current.established)
                    return results;
                var century = this.century(current.established);
                var found = results.find(p => p.value == century.start);
                if (!found) {
                    results.push({
                        value: century.start,
                        text: century.text,
                    });
                }
                return results;
            }, [])
            .sort((a, b) => a.value - b.value);
        this.after.unshift({ value: 0, text: "ALL" })
    }
    public afterChanged(event: { value: number, text: string }) {
        if (event.value == 0)
            this.mediator.publish("afterCleared");
        else
            this.mediator.publish("afterChanged", { value: event.value });
    }

    public before: { value: number, text: string }[] = [];
    public beforeLoad(data: BreweryData[]) {
        this.before = data
            .reduce((results: { value: number, text: string }[], current) => {
                if (!current.established)
                    return results;
                var century = this.century(current.established);
                var found = results.find(p => p.value == century.end);
                if (!found) {
                    results.push({
                        value: century.end,
                        text: century.text,
                    });
                }
                return results;
            }, [])
            .sort((a, b) => a.value - b.value);
        this.before.unshift({ value: 0, text: "ALL" })
    }
    public beforeChanged(event: { value: number, text: string }) {
        if (event.value == 0)
            this.mediator.publish("beforeCleared");
        else
            this.mediator.publish("beforeChanged", { value: event.value });
    }

    public letters: { value: string, text: string }[] = [];
    public lettersLoad(data: BreweryData[]) {
        this.letters = data
            .reduce((results: { value: string, text: string }[], current) => {
                if (!current.name)
                    return results;
                var letter = current.name.charAt(0);
                var found = results.find(p => p.value == letter);
                if (!found) {
                    results.push({
                        value: letter,
                        text: letter,
                    });
                }
                return results;
            }, [])
            .sort((a, b) => a.text.localeCompare(b.text));
        this.letters.unshift({ value: "*", text: "ALL" });
    }
    public lettersChanged(event: { value: string, text: string }) {
        if (event.value == "*")
            this.mediator.publish("lettersCleared");
        else
            this.mediator.publish("lettersChanged", { value: event.value });
    }

    public length: { value: number, text: string }[] = [];
    public lengthLoad(data: BreweryData[]) {
        this.length = data
            .reduce((results: { value: number, text: string }[], current) => {
                if (!current.name)
                    return results;
                var found = results.find(p => p.value == current.name.length);
                if (!found) {
                    results.push({
                        value: current.name.length,
                        text: current.name.length.toString(),
                    });
                }
                return results;
            }, [])
            .sort((a, b) => a.value - b.value);
        this.length.unshift({ value: 0, text: "ALL" });
    }
    public lengthChanged(event: { value: number, text: string }) {
        if (event.value == 0)
            this.mediator.publish("lengthCleared");
        else
            this.mediator.publish("lengthChanged", { value: event.value });
    }

    private century(year: number): { start: number, end: number, text: string } {
        var value = Math.ceil(year / 100);
        return {
            start: (value - 1) * 100 + 1,
            end: value * 100,
            text: `${value}th century`
        };
    }
}