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