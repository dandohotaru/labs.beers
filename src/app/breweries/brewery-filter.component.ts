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

		});

		this.mediator.subscribe("breweriesChanged", (data: BreweryData[]) => {

			var params = this.route.snapshot.queryParams;

		});
	}

	public ngOnDestroy(): void {
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