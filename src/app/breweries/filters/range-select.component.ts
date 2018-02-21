import * as moment from 'moment';
import { Component, OnInit, OnDestroy, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { RelayService } from 'app/shared/filters/relay.service';

export interface Keys {
  after: string,
  before: string,
};

@Component({
  selector: 'range-select',
  templateUrl: './range-select.component.html'
})
export class RangeSelectComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public label: string;

  @Input()
  public after: { key: string, value?: Date };

  @Input()
  public before: { key: string, value?: Date };

  @ViewChild('instance')
  public calendar;

  public options: Date[];

  constructor(private relay: RelayService) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes["after"] || changes["before"]) {
      if (this.after && this.before) {
        this.options = [this.after.value, this.before.value]
      }
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public close(event: MouseEvent) {
  }

  public toggle(state: boolean) {
    this.calendar.overlayVisible = state;
  }

  public select(date: Date) {
    let map = (p:Date)=>{
      return p
        ? moment(p).format("YYYYMMDD")
        : null;
    };

    this.relay.navigate({
      [this.after.key]: map(this.options[0]),
      [this.before.key]: map(this.options[1]),
    });
  }
}
