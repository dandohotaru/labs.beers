import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface RelayOption {
	key: string,
	value: string | number | boolean | (string | number | boolean)[]
}

export type ValueOption = string | number | boolean | Date;
export type ParamsOption = { [key: string]: ValueOption | ValueOption[]};

@Injectable()
export class RelayService {

	private parameters: Params;

	constructor(private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.parameters = params;
		});
	}

	public navigate(options: ParamsOption){

		Object.keys(options).forEach(p => {
			let option = options[p];
			if (option == "*") {
				options[p] = null;
			}
			else if (option instanceof Array) {
				options[p] = option.join("|");
			}
		});

		this.router.navigate([".", {}], {
			queryParams: options,
			queryParamsHandling: "merge",
			relativeTo: this.route
		});
	}

}