import { QueryModel } from "./query.models";

export class QueryProvider {

    private queries: QueryModel[] = [];

    public analyse(context: string, predicate: (item) => boolean, condition: boolean): void {
        if (condition) {
            this.attach(context, predicate);
        } else {
            this.detach(context);
        }
    }

    public attach(name: string, predicate: (item: any) => boolean): void {
        let query = this.queries.find(p => p.name == name);
        if (query) {
            var index = this.queries.indexOf(query);
            this.queries.splice(index, 1);
        }

        this.queries.push({
            name: name,
            predicate: predicate
        });

        this.queries = this.queries.slice();
    }

    public detach(name: string): void {
        let query = this.queries.find(p => p.name == name);
        if (query) {
            var index = this.queries.indexOf(query);
            this.queries.splice(index, 1);
        }

        this.queries = this.queries.slice();
    }

    public apply<T>(input: T[], process: (output: T[]) => void) {
        var results = input.filter(item => {
            var match = this.queries.every(query => {
                return query.predicate(item) == true;
            });
            return match;
        });

        process(results);
    }
}
