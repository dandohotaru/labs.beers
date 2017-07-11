import { Pipe, PipeTransform } from '@angular/core';
import { BreweryData } from "app/shared/services/beers.models";

@Pipe({
    name: 'breweryPredicate'
})
export class BreweryListPipe implements PipeTransform {
    transform(items: BreweryData[], args: any[]): any {
        return args
            ? items.filter(brewery => {
                var match = args.every(p => p.query(brewery) == true);
                return match;
            })
            : items;
    }
}

// this.temp = this.breweries.filter(brewery => {
//       var match = this.predicates.every(p => p.query(brewery) == true);
//       return match;
//     });

// https://blog.mariusschulz.com/2016/11/03/typescript-2-0-tagged-union-types
// https://stackoverflow.com/questions/41603250/angular-2-ngfor-pipe-filter-array-of-objects-by-object-property
// https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor