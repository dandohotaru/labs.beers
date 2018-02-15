import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { RelayService } from 'app/shared/filters/relay.service';

interface FilterInput {
  established: number
}

interface FilterOption {
  value: string | number,
  text: string,
  disabled?: boolean,
  selected?: boolean,
}

@Component({
  selector: 'year-filter',
  templateUrl: 'year-filter.component.html'
})
export class YearFilterComponent implements OnInit, OnDestroy {

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
        p.selected = p.value == params["year"];
      });
    });

    this.mediator.subscribe(this.refinedEvent, (data: FilterInput[]) => {
      var params = this.route.snapshot.queryParams;

      let options = this.map(data);
      this.options.forEach(p => {
        p.disabled = !options.find(o => o.value == p.value);
        p.selected = p.value == params["year"];
      });
    });
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe([this.loadedEvent, this.refinedEvent]);
  }

  private map(data: FilterInput[]): FilterOption[] {
    let options = data
      .reduce((results: FilterOption[], current) => {
        var temp = current.established
          ? {
            value: current.established,
            text: current.established.toString()
          }
          : {
            value: 0,
            text: "unknown"
          };

        var found = results.find(p => p.value == temp.value);
        if (!found) {
          results.push(temp);
        }
        return results;
      }, [])
      .sort((a, b) => +a.value - +b.value);
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public changed(event: { value: string | number, text: string }) {
    this.relay.navigate({ key: "year", value: event.value });
  }
}
