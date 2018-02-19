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

  @Input()
  public params: { [key: string]: string };

  @ViewChild('instance')
  public calendar;

  public options: Date[];

  constructor(private relay: RelayService) {
  }

  public ngOnChanges(changes: SimpleChanges): void {

    // Params
    let paramsChanges = changes["params"];
    if (paramsChanges && this.params) {
      var after = this.params[this.after.key]
        ? moment(this.params[this.after.key]).toDate()
        : moment().startOf('day').toDate();
      var before = this.params[this.before.key]
        ? moment(this.params[this.before.key]).toDate()
        : null;
      this.options = [after, before];
    }

    // Options
    // let afterChanges = changes["after"];
    // if (afterChanges && this.after) {
    //   var param = params[this.after.key];
    //   this.options[0] = param
    //     ? moment(param).toDate()
    //     : this.after.value || this.default;
    // }

    // // Facets
    // let beforeChanges = changes["before"];
    // if (beforeChanges && this.before) {
    //   var param = params[this.before.key];
    //   this.options[1] = param
    //     ? moment(param).toDate()
    //     : this.before.value || null;
    // }
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
