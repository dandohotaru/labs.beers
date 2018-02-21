import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'start' })
export class StartRangePipe implements PipeTransform {
  constructor() { }
  public transform(data: { [key: string]: any }, key: string): { key: string, value?: Date } {
    if (!data)
      return null;
    let value = data[key]
      ? moment(data[key], "YYYYMMDD").startOf('day').toDate()
      : moment().startOf('day').toDate();
    return {
      key: key,
      value: value
    };
  }
}

@Pipe({ name: 'end' })
export class EndRangePipe implements PipeTransform {
  constructor() { }
  public transform(data: { [key: string]: any }, key: string): { key: string, value?: Date } {
    if (!data)
      return null;
    let value = data[key]
      ? moment(data[key], "YYYYMMDD").endOf('day').toDate()
      : null;
    return {
      key: key,
      value: value
    };
  }
}

@Pipe({ name: 'single' })
export class SingleSelectPipe implements PipeTransform {
  public transform(data: { [key: string]: any }, key: string) {
    if (!data)
      return null;
    let value: string = data[key];
    return value;
  }
}

@Pipe({ name: 'multiple' })
export class MultipleSelectPipe implements PipeTransform {
  public transform(data: { [key: string]: any }, key: string) {
    if (!data)
      return null;
    let value: string = data[key];
    return value ? value.split("|") : null;
  }
}