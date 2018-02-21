import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RelayService {

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	public navigate(options: { [key: string]: any }) {

		Object.keys(options).forEach(key => {
			let option = options[key];
			if (option == "*") {
				options[key] = null;
			}
			else if (option instanceof Array) {
				options[key] = option.join("|");
			}
		});

		this.router.navigate([".", {}], {
			queryParams: options,
			queryParamsHandling: "merge",
			relativeTo: this.route
		});
	}
}

export function build(key: string, payload: any): { [key: string]: any } {
	type Single = { value: string };
	let single = (input: any): input is Single => !!input.value;

	type Multiple = { values: string[] };
	let multiple = (input: any): input is Multiple => !!input.values;

	type Range = { after: string, before: string };
	let range = (input: any): input is Range => !!input.after;

	let options = {};
	if (single(payload)) {
		options[key] = payload.value;
	} else if (multiple(payload)) {
		options[key] = payload.values;
	} else if (range(payload)) {
		let after = key.split(",")[0];
		if (after)
			options[after] = payload.after;
		let before = key.split(",")[1];
		if (before)
			options[before] = payload.before;
	}
	return options;
}