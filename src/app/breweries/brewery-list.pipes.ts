import { Pipe, PipeTransform } from '@angular/core';
import { BreweryData } from 'app/shared/services/breweries.models';
import { BreweriesMapper, OrganicOption } from './brewery-list.mapper';

@Pipe({ name: 'organic' })
export class BreweryOrganicPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]): OrganicOption[] {
    return this.mapper.organics(data);
  }
}
