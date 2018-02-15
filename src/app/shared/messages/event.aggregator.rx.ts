import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

export interface Event {
  type: string;
  data?: any;
}

@Injectable()
export class EventAggregator {
  private subject: Subject<Event>;
  private subscriptions: { [key: string]: Subscription[] } = {};

  constructor() {
    this.subject = new Subject<Event>();
  }

  public publish(type: string, data?: any) {
    let event = {
      type: type,
      data: data,
    };
    this.subject.next(event);
  }

  public subscribe(type: string, process: (data: any) => void): Subscription {
    var subscription = this.subject
      .filter(event => event.type === type)
      .map(event => event.data)
      .share()
      .subscribe(data => {
        process(data);
      });

    if (this.subscriptions[type]) {
      this.subscriptions[type].push(subscription);
    }
    else {
      this.subscriptions[type] = [subscription];
    }

    return subscription;
  }

  public unsubscribe(types: string[]) {

    Object
      .keys(this.subscriptions)
      .filter(key => types.some(type => type == key))
      .forEach(key => {
        var subscriptions = this.subscriptions[key];
        subscriptions.forEach(p => p.unsubscribe());
      })
  }
}