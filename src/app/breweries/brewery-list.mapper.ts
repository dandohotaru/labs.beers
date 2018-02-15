import { Injectable } from '@angular/core';
import { BreweryData } from 'app/shared/services/breweries.models';

export type OrganicOption = { value: string | number, text: string };

@Injectable()
export class BreweriesMapper {

  constructor() { }

  public organics(data: BreweryData[]): OrganicOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: OrganicOption[], current) => {
        var found = results.find(p => p.value == current.isOrganic);
        if (!found) {
          results.push({
            value: current.isOrganic,
            text: current.isOrganic,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.text.localeCompare(b.text));
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }
}
