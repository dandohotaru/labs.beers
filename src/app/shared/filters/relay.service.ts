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