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

			this.length = this.lengthMap(data);
			this.length.forEach(p => {
				p.selected = p.value == params["length"];
			});
		});

		this.mediator.subscribe("breweriesChanged", (data: BreweryData[]) => {

			var params = this.route.snapshot.queryParams;

			let length = this.lengthMap(data);
			this.length.forEach(p => {
				p.disabled = !length.find(o => o.value == p.value);
				p.selected = p.value == params["length"];
			});
		});
	}

	public ngOnDestroy(): void {
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