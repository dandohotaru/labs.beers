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
  selector: 'reactive-select',
  templateUrl: 'reactive-select.component.html'
})
export class ReactiveSelectComponent implements OnInit, OnDestroy {

  @Input()
  public key: string;

  @Input()
  public label: string;

  @Input()
  public loadedEvent: string;

  @Input()
  public refinedEvent: string;

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
        p.selected = p.value == params[this.key];
      });
    });

    this.mediator.subscribe(this.refinedEvent, (data) => {
      var params = this.route.snapshot.queryParams;

      let facets = this.mapper(data);
      this.options.forEach(p => {
        p.disabled = !facets.find(o => o.value == p.value);
        p.selected = p.value == params[this.key];
      });
    });
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe([this.loadedEvent, this.refinedEvent]);
  }

  public changed(event: { value: string, text: string }) {
    this.relay.navigate({ key: this.key, value: event.value });
  }
}
