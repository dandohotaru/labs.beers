export interface Query<TModel> {
    name: string;
    predicate: (model: TModel) => boolean;
}

export interface QueryModel {
    name: string;
    predicate: (model: any) => boolean;
}

export class QueryService {

    private queries: QueryModel[] = [];

    public register(token: string, match: (record: any, value: string | number | boolean) => boolean, input: string): void {
        if (input) {
            let predicate = (p) => {
                return input.split("|").some(v => match(p, v))
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
