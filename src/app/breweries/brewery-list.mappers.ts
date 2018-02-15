import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { BreweryData } from 'app/shared/services/breweries.models';

export type OrganicOption = { value: string | number, text: string };
export type YearOption = { value: string | number, text: string };
export type AfterOption = { value: string | number, text: string };
export type BeforeOption = { value: string | number, text: string };
export type LetterOption = { value: string | number, text: string };
export type LengthOption = { value: string | number, text: string };

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

@Pipe({ name: 'organic' })
export class OrganicFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]): OrganicOption[] {
    return this.mapper.organics(data);
  }
}
