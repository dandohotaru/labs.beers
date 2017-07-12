import { Query } from "./query.models";

export class QueryFeature<T> {

    public queries: Query<T>[] = [];

    public apply(name: string, predicate: (item: T) => boolean) {

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

    public clear(name: string) {
        let query = this.queries.find(p => p.name == name);
        if (query) {
            var index = this.queries.indexOf(query);
            this.queries.splice(index, 1);
        }

        this.queries = this.queries.slice();
    }
}
