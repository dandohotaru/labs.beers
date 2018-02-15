import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { RelayService } from 'app/shared/filters/relay.service';

interface FilterInput {
  name: string
}

interface FilterOption {
  value: string,
  text: string,
  disabled?: boolean,
  selected?: boolean,
}

@Component({
  selector: 'letter-filter',
  templateUrl: 'letter-filter.component.html'
})
export class LetterFilterComponent implements OnInit, OnDestroy {

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
        p.selected = p.value == params["letter"];
      });
    });

    this.mediator.subscribe(this.refinedEvent, (data: FilterInput[]) => {
      var params = this.route.snapshot.queryParams;

      let options = this.map(data);
      this.options.forEach(p => {
        p.disabled = !options.find(o => o.value == p.value);
        p.selected = p.value == params["letter"];
      });
    });
  }

  public ngOnDestroy(): void {
    this.mediator.unsubscribe([this.loadedEvent, this.refinedEvent]);
  }

  private map(data: FilterInput[]): FilterOption[] {
    let options = data
      .reduce((results: FilterOption[], current) => {
        if (!current.name)
          return results;
        var letter = current.name.charAt(0);
        var found = results.find(p => p.value == letter);
        if (!found) {
          results.push({
            value: letter,
            text: letter,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.text.localeCompare(b.text));
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public changed(event: { value: string, text: string }) {
    this.relay.navigate({ key: "letter", value: event.value });
  }
}
