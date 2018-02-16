import { Pipe, PipeTransform } from '@angular/core';
import { QueryModel } from './query.service';

@Pipe({
    name: 'filterBy'
})
export class FilterByQueriesPipe implements PipeTransform {
    transform(records: any[], args: QueryModel[]): any {
        return args
            ? records.filter(record => {
                var match = args.every(query => query.predicate(record) == true);
                return match;
            })
            : records;
    }
}
