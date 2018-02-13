import { QueryModel } from "./query.models";

export class QueryProvider {

    private queries: QueryModel[] = [];

    public register(name: string, predicate: (item: any) => boolean, condition: boolean): void {
        if (condition) {
            this.attach(name, predicate);
        } else {
            this.detach(name);
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
    }

    public detach(name: string): void {
        let query = this.queries.find(p => p.name == name);
        if (query) {
            var index = this.queries.indexOf(query);
            this.queries.splice(index, 1);
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
}
