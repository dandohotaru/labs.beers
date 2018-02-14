import { NgModule } from '@angular/core';

import { EventAggregator } from './event.aggregator.rx';

@NgModule({
  imports: [],
  declarations: [],
  providers:[
    { provide: EventAggregator, useClass: EventAggregator }
  ]
})
export class EventModule { }
