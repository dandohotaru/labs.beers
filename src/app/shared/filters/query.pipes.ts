import { Pipe, PipeTransform } from '@angular/core';
import { QueryModel } from './query.models';

@Pipe({
    name: 'filterBy'
})
export class FilterByQueriesPipe implements PipeTransform {
    transform(items: any[], args: QueryModel[]): any {
        return args
            ? items.filter(brewery => {
                var match = args.every(p => p.predicate(brewery) == true);
                return match;
            })
            : items;
    }
}
