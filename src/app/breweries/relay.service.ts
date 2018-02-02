import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class RelayService {

	private parameters: Params;

	constructor(private router: Router, private route: ActivatedRoute) {

		this.route.queryParams.subscribe(params => {
			this.parameters = params;
		});
	}

	public direct(option: { key, value }) {
		let options: Params = Object.assign({}, this.parameters);
		options[option.key] = option.value;

		this.router.navigate([".", {}], {
			queryParams: options,
			queryParamsHandling: "merge",
			relativeTo: this.route
		});
	}
}