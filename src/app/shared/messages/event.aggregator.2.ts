import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

export class Event {
  type: string;
  data?: any;
}

@Injectable()
export class EventAggregator {
  public subject: Subject<Event>;

  constructor() {
    this.subject = new Subject<Event>();
  }

  public publish(type: string, data?: any) {
    this.subject.next({
      type,
      data
    });
  }

  public subscribe(type: string, callback?: (data) => void) {

    
    // return this.subject
    //   .filter(event => event.type === type)
    //   .map(event => event.data)
    //   .share();

    // ToDo: Testing in progress
    this.subject
      .filter(event => event.type === type)
      .map(event => event.data)
      .subscribe(p => {
        callback(p);
      });
  }

  public unsubscribe() {
    this.subject.unsubscribe();
  }
}