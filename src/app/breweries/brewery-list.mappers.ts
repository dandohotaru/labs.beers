import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { BreweryData } from 'app/shared/services/breweries.models';

export type OrganicOption = { value: string | number, label: string };
export type YearOption = { value: string | number, label: string };
export type AfterOption = { value: string | number, label: string };
export type BeforeOption = { value: string | number, label: string };
export type LetterOption = { value: string | number, label: string };
export type LengthOption = { value: string | number, label: string };
export type CreationOption = { value: string | number, label: string };

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
            label: current.isOrganic,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.label.localeCompare(b.label));
    options.unshift({ value: "*", label: "ALL" });
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
            label: current.established.toString()
          }
          : {
            value: 0,
            label: "unknown"
          };

        var found = results.find(p => p.value == temp.value);
        if (!found) {
          results.push(temp);
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", label: "ALL" });
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
            label: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", label: "ALL" });
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
            label: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", label: "ALL" });
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
            label: letter,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.label.localeCompare(b.label));
    options.unshift({ value: "*", label: "ALL" });
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
            label: current.name.length.toString(),
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", label: "ALL" });
    return options;
  }

  public creations(data: BreweryData[]): CreationOption[] {
    if (!data)
      return null;
    let options = data
      .reduce((results: CreationOption[], current) => {
        if (!current.name)
          return results;
        let creation = moment(current.createDate);
        let value = creation.format("YYYYMMDD");
        let label = creation.format("dddd, MMMM Do YYYY")
        var found = results.find(p => p.value == value);
        if (!found) {
          results.push({
            value: value,
            label: label,
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", label: "ALL" });
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
    return timed("organics", () => this.mapper.organics(data));
  }
}

@Pipe({ name: 'year' })
export class YearFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return timed("years", () => this.mapper.years(data));
  }
}

@Pipe({ name: 'after' })
export class AfterFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return timed("after", () => this.mapper.after(data));
  }
}

@Pipe({ name: 'before' })
export class BeforeFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return timed("before", () => this.mapper.before(data));
  }
}

@Pipe({ name: 'letter' })
export class LetterFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return timed("letters", () => this.mapper.letters(data));
  }
}

@Pipe({ name: 'length' })
export class LengthFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return timed("lengths", () => this.mapper.lengths(data));
  }
}

@Pipe({ name: 'creation' })
export class CreationFilterPipe implements PipeTransform {
  constructor(private mapper: BreweriesMapper) { }
  public transform(data: BreweryData[]) {
    return timed("creation", () => this.mapper.creations(data));
  }
}

function timed(context: string, process: () => any) {
  let stamp = moment();
  var results = process();
  let elapsed = moment().diff(stamp, "ms");
  //console.log(`${context}: ${elapsed} ms`);
  return results;
}