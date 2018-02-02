
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { EventAggregator } from "app/shared/messages/event.aggregator";
import { BreweryData } from "app/shared/services/breweries.models";
import { RelayService } from 'app/breweries/relay.service';

@Component({
	selector: 'brewery-filter',
	templateUrl: 'brewery-filter.component.html'
})
export class BreweryFilterComponent implements OnInit {

	private breweries: BreweryData[];

	constructor(private mediator: EventAggregator, private relay: RelayService) { }

	ngOnInit() {
		this.mediator.subscribe("breweriesChanged", (event: BreweryData[]) => {
			if (!this.breweries){
				this.organicLoad(event);
				this.yearsLoad(event);
				this.afterLoad(event);
				this.beforeLoad(event);
				this.lettersLoad(event);
				this.lengthLoad(event);

				this.breweries = event;
			}
		});
	}

	// Organic
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
		let value = event.value == "*" ? null : event.value;
		this.relay.direct({ key: "organic", value: value });
	}

	// Years
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
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "year", value: value });
	}

	// After
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
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "after", value: value });
	}

	// Before
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
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "before", value: value });
	}

	// Letters
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
		let value = event.value == "*" ? null : event.value;
		this.relay.direct({ key: "letter", value: value });
	}

	// Length
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
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "length", value: value });
	}

	// Private
	private century(year: number): { start: number, end: number, text: string } {
		var value = Math.ceil(year / 100);
		return {
			start: (value - 1) * 100 + 1,
			end: value * 100,
			text: `${value}th century`
		};
	}
}