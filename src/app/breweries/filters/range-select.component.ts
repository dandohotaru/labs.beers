import * as moment from 'moment';
import { Component, OnInit, OnDestroy, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelayService } from 'app/shared/filters/relay.service';

@Component({
  selector: 'range-select',
  templateUrl: './range-select.component.html'
})
export class RangeSelectComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public keys: string[];

  @Input()
  public label: string;

  @Input()
  public after: Date;

  @Input()
  public before: Date;

  @ViewChild('instance')
  public calendar;

  public options: Date[]=[];

  constructor(private relay: RelayService, private route: ActivatedRoute) {
    var today = moment().startOf('day').toDate();
    this.options = [today];
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // Params
    var params = this.route.snapshot.queryParams
    let values = this.keys
      ? this.keys
        .reduce((results: Date[], current: string) => {
          var value = params[current];
          if (value) {
            let date = moment(value).toDate();
            results.push(date);
          }
          return results;
        }, [])
      : null;

    // Options
    let afterChanges = changes["after"];
    if (afterChanges) {
      this.options[0] = values && values[0] || this.after || new Date();
    }

    // Facets
    let beforeChanges = changes["before"];
    if (beforeChanges) {
      this.options[1] = values && values[1] || this.before;
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public toggle(state: boolean) {
    this.calendar.overlayVisible = state;
  }

  public select(date: Date) {
    let output: { [key: string]: string } = {};
    this.keys.forEach((p, i) => {
      output[p] = this.options[i]
        ? moment(this.options[i]).format("YYYYMMDD")
        : null;
    });

    this.relay.navigate(output);
  }

  public close(event: MouseEvent){

  }

}
