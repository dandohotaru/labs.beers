import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventAggregator } from "app/shared/messages/event.aggregator.rx";
import { RelayService } from 'app/shared/filters/relay.service';

interface FilterInput {
  isOrganic: string
}

interface FilterOption {
  value: string,
  text: string,
  disabled?: boolean,
  selected?: boolean,
}

@Component({
  selector: 'organic-filter',
  templateUrl: 'organic-filter.component.html'
})
export class OrganicFilterComponent implements OnInit, OnDestroy {

  @Input()
  public loadedName: string;

  @Input()
  public refinedName: string;

  public options: FilterOption[] = [];

  constructor(
    private mediator: EventAggregator,
    private relay: RelayService,
    private route: ActivatedRoute) { }

  public ngOnInit() {

    this.mediator.subscribe(this.loadedName, (data: FilterInput[]) => {
      var params = this.route.snapshot.queryParams;

      this.options = this.map(data);
      this.options.forEach(p => {
        p.selected = p.value == params["organic"];
      });
    });

    this.mediator.subscribe(this.refinedName, (data: FilterInput[]) => {
      var params = this.route.snapshot.queryParams;

      let options = this.map(data);
      this.options.forEach(p => {
        p.disabled = !options.find(o => o.value == p.value);
        p.selected = p.value == params["organic"];
      });
    });
  }

  public ngOnDestroy(): void {
  }

  private map(data: FilterInput[]): FilterOption[] {
    let options = data
      .reduce((results: FilterOption[], current) => {
        var found = results.find(p => p.value == current.isOrganic);
        if (!found) {
          results.push({
            value: current.isOrganic,
            text: current.isOrganic,
          });
        }
        return results;
      }, [])
      .sort((a, b) => a.text.localeCompare(b.text));
    options.unshift({ value: "*", text: "ALL" });
    return options;
  }

  public changed(event: { value: string, text: string }) {
    let value = event.value == "*" ? null : event.value;
    this.relay.navigate({ key: "organic", value: value });
  }

}
