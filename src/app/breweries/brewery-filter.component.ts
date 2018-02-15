import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { BreweryData } from "app/shared/services/breweries.models";
import { RelayService } from 'app/shared/filters/relay.service';

@Component({
	selector: 'brewery-filter',
	templateUrl: 'brewery-filter.component.html'
})
export class BreweryFilterComponent implements OnInit, OnDestroy {
	
	constructor(
		private mediator: EventAggregator,
		private relay: RelayService,
		private route: ActivatedRoute) { }

	public ngOnInit() {

		this.mediator.subscribe("breweriesLoaded", (data: BreweryData[]) => {
			
			var params = this.route.snapshot.queryParams;

			this.before = this.beforeMap(data);
			this.before.forEach(p => {
				p.selected = p.value == params["before"];
			});

			this.letters = this.lettersMap(data);
			this.letters.forEach(p => {
				p.selected = p.value == params["letter"];
			});

			this.length = this.lengthMap(data);
			this.length.forEach(p => {
				p.selected = p.value == params["length"];
			});
		});

		this.mediator.subscribe("breweriesChanged", (data: BreweryData[]) => {

			var params = this.route.snapshot.queryParams;

			let before = this.beforeMap(data);
			this.before.forEach(p => {
				p.disabled = !before.find(o => o.value == p.value);
				p.selected = p.value == params["before"];
			});

			let letters = this.lettersMap(data);
			this.letters.forEach(p => {
				p.disabled = !letters.find(o => o.value == p.value);
				p.selected = p.value == params["letter"];
			});

			let length = this.lengthMap(data);
			this.length.forEach(p => {
				p.disabled = !length.find(o => o.value == p.value);
				p.selected = p.value == params["length"];
			});
		});
	}

	public ngOnDestroy(): void {
	}

	// Before
	public before: { value: number, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public beforeMap(data: BreweryData[]): { value: number, text: string }[] {
		let options = data
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
		options.unshift({ value: 0, text: "ALL" });
		return options;
	}
	public beforeChanged(event: { value: number, text: string }) {
		let value = event.value == 0 ? null : event.value;
		this.relay.navigate({ key: "before", value: value });
	}

	// Letters
	public letters: { value: string, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public lettersMap(data: BreweryData[]): { value: string, text: string }[] {
		let options = data
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
		options.unshift({ value: "*", text: "ALL" });
		return options;
	}
	public lettersChanged(event: { value: string, text: string }) {
		let value = event.value == "*" ? null : event.value;
		this.relay.navigate({ key: "letter", value: value });
	}

	// Length
	public length: { value: number, text: string, disabled?: boolean, selected?: boolean }[] = [];
	public lengthMap(data: BreweryData[]): { value: number, text: string }[] {
		let options = data
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
		options.unshift({ value: 0, text: "ALL" });
		return options;
	}
	public lengthChanged(event: { value: number, text: string }) {
		let value = event.value == 0 ? null : event.value;
		this.relay.navigate({ key: "length", value: value });
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