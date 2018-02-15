import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { RelayService } from 'app/shared/filters/relay.service';

interface FilterInput {
  established: number
}

interface FilterOption {
  value: number | string,
  text: string,
  disabled?: boolean,
  selected?: boolean,
}

@Component({
  selector: 'before-filter',
  templateUrl: 'before-filter.component.html'
})
export class BeforeFilterComponent implements OnInit, OnDestroy {

  @Input()
  public loadedEvent: string;

  @Input()
  public refinedEvent: string;

  public options: FilterOption[] = [];

  constructor(
    private mediator: EventAggregator,
    private relay: RelayService,
    private route: ActivatedRoute) { }

  public ngOnInit() {

    this.mediator.subscribe(this.loadedEvent, (data: FilterInput[]) => {
      var params = this.route.snapshot.queryParams;

      this.options = this.map(data);
      this.options.forEach(p => {
        p.selected = p.value == params["before"];
      });
    });

    this.mediator.subscribe(this.refinedEvent, (data: FilterInput[]) => {
      var params = this.route.snapshot.queryParams;

      let options = this.map(data);
      this.options.forEach(p => {
        p.disabled = !options.find(o => o.value == p.value);
        p.selected = p.value == params["before"];
      });
    });
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe([this.loadedEvent, this.refinedEvent]);
  }

  private map(data: FilterInput[]): FilterOption[] {
    let options = data
      .reduce((results: FilterOption[], current) => {
        if (!current.established)
          return results;
        var century = this.century(current.established);
        var found = results.find(p => p.value == century.end);
        if (!found) {
          results.push({
            value: century.end,
            text: century.text,
          });
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public changed(event: { value: number | string, text: string }) {
    this.relay.navigate({ key: "before", value: event.value });
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
