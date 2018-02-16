import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelayService } from 'app/shared/filters/relay.service';
import { SelectItem } from 'primeng/primeng';

export interface SelectOption extends SelectItem {
  value: string | number | boolean,
  label: string,
  disabled?: boolean,
}

@Component({
  selector: 'multi-select',
  templateUrl: 'multi-select.component.html'
})
export class MultiSelectComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public key: string;

  @Input()
  public label: string;

  @Input()
  public max: number = 5;

  @Input()
  public options: SelectOption[];

  @Input()
  public facets: SelectOption[];

  @Input()
  public selection: string[] = [];

  public default: string = "*";

  constructor(private relay: RelayService, private route: ActivatedRoute) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // Params
    var params = this.route.snapshot.queryParams;
    var values = params[this.key]
      ? String(params[this.key]).split("|")
      : [];

    // Options
    let optionsChanges = changes["options"];
    if (optionsChanges && this.options) {
      this.selection = values;
      if (values.length == 0)
        this.selection.push(this.default);
    }

    // Facets
    let facetsChanges = changes["facets"];
    if (facetsChanges && this.options) {
      let facets = facetsChanges.currentValue;
      this.options.forEach(option => {
        option.disabled = !facets.find(facet => facet.value == option.value);
      });
      this.selection = values;
      if (values.length == 0)
        this.selection.push(this.default);
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public changed(event: { value: { value: string | number }[], itemValue: string | number }) {
    if (event.itemValue == this.default) {
      let index = this.selection.indexOf(this.default);
      if (index >= 0) {
        this.selection = [this.default];
        this.relay.navigate({ key: this.key, value: this.default });
      }
      else {
        this.selection = [];
        this.relay.navigate({ key: this.key, value: 0 });
      }
    } else {
      if (event.value.length == 0) {
        this.selection = [this.default];
        this.relay.navigate({ key: this.key, value: this.default });
      }
      else {
        let index = this.selection.indexOf(this.default);
        if (index >= 0) {
          this.selection.splice(index, 1);
        }
        this.relay.navigate({ key: this.key, value: event.value.join("|") });
      }
    }
  }
}
