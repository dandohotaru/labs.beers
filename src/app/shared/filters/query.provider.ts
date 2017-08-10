import { QueryModel } from "./query.models";

export class QueryProvider {

    private queries: QueryModel[] = [];
    

    public attach(name: string, predicate: (item: any) => boolean) {

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

    public detach(name: string) {
        let query = this.queries.find(p => p.name == name);
        if (query) {
            var index = this.queries.indexOf(query);
            this.queries.splice(index, 1);
        }

        this.queries = this.queries.slice();
    }

    public match(target: any) {
        return this.queries.every(query => query.predicate(target) == true);
    }
}
