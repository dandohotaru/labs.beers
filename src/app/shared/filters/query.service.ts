export interface QueryModel {
	name: string;
	predicate: (model: any) => boolean;
}

type Input = string | number | boolean | Date | { after: Date, before: Date };

export class QueryService {

	private queries: QueryModel[] = [];

	public register(token: string, match: (record: any, value: Input) => boolean, input: string): void {
		if (input) {
			let predicate = (record: any) => {
				return typeof input === "string"
					? input.split("|").some(value => match(record, value))
					: match(record, input);
			};
			this.attach(token, predicate);
		} else {
			this.detach(token);
		}
	}

	public apply(input: any[], process: (output: any[]) => void) {
		var results = input.filter(item => {
			var match = this.queries.every(query => {
				return query.predicate(item) == true;
			});
			return match;
		});

		process(results);
	}

	private attach(token: string, predicate: (item: any) => boolean): void {
		let query = this.queries.find(p => p.name == token);
		if (query) {
			var index = this.queries.indexOf(query);
			this.queries.splice(index, 1);
		}

		this.queries.push({
			name: token,
			predicate: predicate
		});
	}

	private detach(token: string): void {
		let query = this.queries.find(p => p.name == token);
		if (query) {
			var index = this.queries.indexOf(query);
			this.queries.splice(index, 1);
		}
	}
}
