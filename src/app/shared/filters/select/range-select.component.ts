import * as moment from 'moment';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

interface SelectOutput {
  after: string,
  before: string,
}

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

  @Output()
  public changed: EventEmitter<SelectOutput> = new EventEmitter<SelectOutput>();

  @ViewChild('instance')
  public calendar;

  public options: Date[];

  constructor() {
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

    this.changed.emit({
      after: map(this.options[0]),
      before: map(this.options[1]),
    });
  }
}
