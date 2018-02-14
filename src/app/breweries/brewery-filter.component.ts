
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { BreweryData } from "app/shared/services/breweries.models";
import { RelayService } from 'app/breweries/relay.service';

@Component({
	selector: 'brewery-filter',
	templateUrl: 'brewery-filter.component.html'
})
export class BreweryFilterComponent implements OnInit {

	constructor(
		private mediator: EventAggregator,
		private relay: RelayService,
		private route: ActivatedRoute) { }

	public ngOnInit() {

		this.mediator.subscribe("breweriesLoaded", (event: BreweryData[]) => {
			
			var params = this.route.snapshot.queryParams;
			console.log("breweriesLoaded");
			console.log(params);

			this.organic = this.organicLoad(event, params["organic"]);
			this.years = this.yearsLoad(event, params["years"]);
			this.after = this.afterLoad(event, params["after"]);
			this.before = this.beforeLoad(event, params["before"]);
			this.letters = this.lettersLoad(event, params["letters"]);
			this.length = this.lengthLoad(event, params["length"]);
		});

		this.mediator.subscribe("breweriesChanged", (event: BreweryData[]) => {

			var params = this.route.snapshot.queryParams;
			console.log("breweriesChanged");
			console.log(params);

			let organic = this.organicLoad(event);
			this.organic.forEach(p => {
				p.disabled = !organic.find(o => o.value == p.value);
				p.selected = p.value == params["organic"];
			});

			let years = this.yearsLoad(event);
			this.years.forEach(p => {
				p.disabled = !years.find(o => o.value == p.value);
				p.selected = p.value == params["years"];
			});

			let after = this.afterLoad(event);
			this.after.forEach(p => {
				p.disabled = !after.find(o => o.value == p.value);
				p.selected = p.value == params["after"];
			});

			let before = this.beforeLoad(event);
			this.before.forEach(p => {
				p.disabled = !before.find(o => o.value == p.value);
				p.selected = p.value == params["before"];
			});

			let letters = this.lettersLoad(event);
			this.letters.forEach(p => {
				p.disabled = !letters.find(o => o.value == p.value);
				p.selected = p.value == params["letter"];
			});

			let length = this.lengthLoad(event);
			this.length.forEach(p => {
				p.disabled = !length.find(o => o.value == p.value);
				p.selected = p.value == params["length"];
			});
		});
	}

	// Organic
	public organic: { value: string, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public organicLoad(data: BreweryData[], param?: string): { value: string, text: string, selected?: boolean }[] {
		let options = data
			.reduce((results: { value: string, text: string, selected?: boolean }[], current) => {
				if (!current.isOrganic)
					return results;
				var found = results.find(p => p.value == current.isOrganic);
				if (!found) {
					results.push({
						value: current.isOrganic,
						text: current.isOrganic,
						selected: current.isOrganic == param,
					});
				}
				return results;
			}, [])
			.sort((a, b) => a.text.localeCompare(b.text));
		options.unshift({ value: "*", text: "ALL" });
		return options;
	}
	public organicChanged(event: { value: string, text: string }) {
		let value = event.value == "*" ? null : event.value;
		this.relay.direct({ key: "organic", value: value });
	}

	// Years
	public years: { value: number, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public yearsLoad(data: BreweryData[], param?: number): { value: number, text: string, selected?: boolean }[] {
		let options = data
			.reduce((results: { value: number, text: string, selected?: boolean }[], current) => {
				if (!current.established)
					return results;
				var found = results.find(p => p.value == current.established);
				if (!found) {
					results.push({
						value: current.established,
						text: current.established.toString(),
						selected: current.established == param,
					});
				}
				return results;
			}, [])
			.sort((a, b) => a.value - b.value);
		options.unshift({ value: 0, text: "ALL" });
		return options;
	}
	public yearChanged(event: { value: number, text: number }) {
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "year", value: value });
	}

	// After
	public after: { value: number, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public afterLoad(data: BreweryData[], param?: number): { value: number, text: string, selected?: boolean }[] {
		let options = data
			.reduce((results: { value: number, text: string, selected?: boolean }[], current) => {
				if (!current.established)
					return results;
				var century = this.century(current.established);
				var found = results.find(p => p.value == century.start);
				if (!found) {
					results.push({
						value: century.start,
						text: century.text,
						selected: century.start == param,
					});
				}
				return results;
			}, [])
			.sort((a, b) => a.value - b.value);
		options.unshift({ value: 0, text: "ALL" });
		return options;
	}
	public afterChanged(event: { value: number, text: string }) {
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "after", value: value });
	}

	// Before
	public before: { value: number, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public beforeLoad(data: BreweryData[], param?: number): { value: number, text: string, selected?: boolean }[] {
		let options = data
			.reduce((results: { value: number, text: string, selected?: boolean }[], current) => {
				if (!current.established)
					return results;
				var century = this.century(current.established);
				var found = results.find(p => p.value == century.end);
				if (!found) {
					results.push({
						value: century.end,
						text: century.text,
						selected: century.end == param,
					});
				}
				return results;
			}, [])
			.sort((a, b) => a.value - b.value);
		options.unshift({ value: 0, text: "ALL" });
		return options;
	}
	public beforeChanged(event: { value: number, text: string }) {
		let value = event.value == 0 ? null : event.value;
		this.relay.direct({ key: "before", value: value });
	}

	// Letters
	public letters: { value: string, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public lettersLoad(data: BreweryData[], param?: string): { value: string, text: string, selected?: boolean }[] {
		let options = data
			.reduce((results: { value: string, text: string, selected?: boolean }[], current) => {
				if (!current.name)
					return results;
				var letter = current.name.charAt(0);
				var found = results.find(p => p.value == letter);
				if (!found) {
					results.push({
						value: letter,
						text: letter,
						selected: letter == param,
					});
				}
				return results;
			}, [])
			.sort((a, b) => a.text.localeCompare(b.text));
		options.unshift({ value: "*", text: "ALL" });
		return options;
	}
	public lettersChanged(event: { value: string, text: string }) {
		let value = event.value == "*" ? null : event.value;
		this.relay.direct({ key: "letter", value: value });
	}

	// Length
	public length: { value: number, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public lengthLoad(data: BreweryData[], param?: number): { value: number, text: string, selected?: boolean }[] {
		let options = data
			.reduce((results: { value: number, text: string, selected?: boolean }[], current) => {
				if (!current.name)
					return results;
				var found = results.find(p => p.value == current.name.length);
				if (!found) {
					results.push({
						value: current.name.length,
						text: current.name.length.toString(),
						selected: current.name.length == param,
					});
				}
				return results;
			}, [])
			.sort((a, b) => a.value - b.value);
		options.unshift({ value: 0, text: "ALL" });
		return options;
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