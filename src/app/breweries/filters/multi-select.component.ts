import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelayService } from 'app/shared/filters/relay.service';
import { SelectItem } from 'primeng/primeng';

interface FilterOption {
  value: string | number | boolean,
  text: string,
  disabled?: boolean,
  selected?: boolean,
}

export interface SelectOption extends SelectItem {
  value: any;
  label: string;
  disabled?: boolean;
  selected?: boolean,
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
  public options: FilterOption[];

  @Input()
  public facets: FilterOption[];

  @Input()
  public selection: string[];

  constructor(private relay: RelayService, private route: ActivatedRoute) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    var params = this.route.snapshot.queryParams;

    let optionsChanges = changes["options"];
    if (optionsChanges && this.options) {
      this.options.forEach(p => {
        p.selected = p.value == params[this.key];
      });
    }

    let facetsChanges = changes["facets"];
    if (facetsChanges && this.options) {
      let facets = facetsChanges.currentValue;
      this.options.forEach(p => {
        p.disabled = !facets.find(o => o.value == p.value);
        //p.selected = p.value == params[this.key];
        p.selected = facets.some(o => o.value == p.value);;
      });
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public changed(event: { value: string | number, text: string }[]) {
    var values: string | number | (string | number)[] = event.map(p => p.value).join("|");
    if (values.length == 0)
      values = "*";
    this.relay.navigate({ key: this.key, value: values });
  }
}
