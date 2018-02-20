import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

export type ValueOption = string | number | boolean | Date;
export type ParamsOption = { [key: string]: ValueOption | ValueOption[]};

@Injectable()
export class RelayService {

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	public navigate(options: ParamsOption){

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