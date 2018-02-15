import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { RelayService } from 'app/shared/filters/relay.service';

interface FilterOption {
  value: string | number | boolean,
  text: string,
  disabled?: boolean,
  selected?: boolean,
}

@Component({
  selector: 'select-filter',
  templateUrl: 'select-filter.component.html'
})
export class SelectFilterComponent implements OnInit, OnDestroy {

  @Input()
  public label: string;

  @Input()
  public loadedEvent: string;

  @Input()
  public refinedEvent: string;

  @Input()
  public paramName: string;

  @Input()
  public mapper: (data) => FilterOption[];

  public options: FilterOption[] = [];

  constructor(
    private mediator: EventAggregator,
    private relay: RelayService,
    private route: ActivatedRoute) { }

  public ngOnInit() {

    this.mediator.subscribe(this.loadedEvent, (data) => {
      var params = this.route.snapshot.queryParams;

      this.options = this.mapper(data);
      this.options.forEach(p => {
        p.selected = p.value == params[this.paramName];
      });
    });

    this.mediator.subscribe(this.refinedEvent, (data) => {
      var params = this.route.snapshot.queryParams;

      let options = this.mapper(data);
      this.options.forEach(p => {
        p.disabled = !options.find(o => o.value == p.value);
        p.selected = p.value == params[this.paramName];
      });
    });
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe([this.loadedEvent, this.refinedEvent]);
  }

  public changed(event: { value: string, text: string }) {
    this.relay.navigate({ key: this.paramName, value: event.value });
  }
}
