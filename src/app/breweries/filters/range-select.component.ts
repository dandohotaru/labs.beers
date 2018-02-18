import * as moment from 'moment';
import { Component, OnInit, OnDestroy, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public options: Date[]=[];

  private default: Date;

  constructor(private relay: RelayService, private route: ActivatedRoute) {
    this.default = moment().startOf('day').toDate();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // Params
    var params = this.route.snapshot.queryParams;

    // Options
    let afterChanges = changes["after"];
    if (afterChanges && this.after) {
      var param = params[this.after.key];
      this.options[0] = param
        ? moment(param).toDate()
        : this.after.value || this.default;
    }

    // Facets
    let beforeChanges = changes["before"];
    if (beforeChanges && this.before) {
      var param = params[this.before.key];
      this.options[1] = param
        ? moment(param).toDate()
        : this.before.value || null;
    }
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      var after = params[this.after.key];
      let one = after
        ? moment(after).toDate()
        : this.after.value || this.default;

      var before = params[this.before.key];
      let two = before
        ? moment(before).toDate()
        : this.before.value || null;

      this.options = [one, two];
    });
  }

  public ngOnDestroy(): void {
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

    let output: { [key: string]: string } = {};
    output[this.after.key] = map(this.options[0]);
    output[this.before.key] = map(this.options[1]);
    this.relay.navigate(output);
  }

  public close(event: MouseEvent){

  }

}
