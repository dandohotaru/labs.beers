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

  public years(data: BreweryData[]): YearOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: YearOption[], current) => {
        var temp = current.established
          ? {
            value: current.established,
            text: current.established.toString()
          }
          : {
            value: 0,
            text: "unknown"
          };

        var found = results.find(p => p.value == temp.value);
        if (!found) {
          results.push(temp);
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public after(data: BreweryData[]): AfterOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: AfterOption[], current) => {
        if (!current.established)
          return results;
        var century = this.century(current.established);
        var found = results.find(p => p.value == century.start);
        if (!found) {
          results.push({
            value: century.start,
            text: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public before(data: BreweryData[]): BeforeOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: BeforeOption[], current) => {
        if (!current.established)
          return results;
        var century = this.century(current.established);
        var found = results.find(p => p.value == century.end);
        if (!found) {
          results.push({
            value: century.end,
            text: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public letters(data: BreweryData[]): LetterOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: LetterOption[], current) => {
        if (!current.name)
          return results;
        var letter = current.name.charAt(0);
        var found = results.find(p => p.value == letter);
        if (!found) {
          results.push({
            value: letter,
            text: letter,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.text.localeCompare(b.text));
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public lengths(data: BreweryData[]): LengthOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: LengthOption[], current) => {
        if (!current.name)
          return results;
        var found = results.find(p => p.value == current.name.length);
        if (!found) {
          results.push({
            value: current.name.length,
            text: current.name.length.toString(),
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  private century(year: number): { start: number, end: number, text: string } {
    var value = Math.ceil(year / 100);
    return {
      start: (value - 1) * 100 + 1,
      end: value * 100,
      text: `${value}th century`
    };
  }
}

@Pipe({ name: 'organic' })
export class OrganicFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return this.mapper.organics(data);
  }
}

@Pipe({ name: 'year' })
export class YearFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return this.mapper.years(data);
  }
}

@Pipe({ name: 'after' })
export class AfterFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return this.mapper.after(data);
  }
}

@Pipe({ name: 'before' })
export class BeforeFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return this.mapper.before(data);
  }
}

@Pipe({ name: 'letter' })
export class LetterFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return this.mapper.letters(data);
  }
}

@Pipe({ name: 'length' })
export class LengthFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return this.mapper.lengths(data);
  }
}