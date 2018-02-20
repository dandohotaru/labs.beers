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
  public aspects: SelectOption[];

  public selection: string[] = [];

  private default: string = "*";

  private none: string = "none";

  constructor(private relay: RelayService, private route: ActivatedRoute) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // Params
    var params = this.route.snapshot.queryParams;
    var values = params[this.key]
      ? String(params[this.key]).split("|")
      : [];

    // Options
    if (changes["options"] && this.options) {
      this.selection = values.length == 0
        ? [this.default]
        : values;
    }

    // Aspects
    if (changes["aspects"] && this.options && this.aspects) {
      this.options.forEach(option => {
        option.disabled = !this.aspects.find(aspect => aspect.value == option.value);
      });

      this.selection = values.length == 0
        ? [this.default]
        : values;
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
      }
      else {
        this.selection = [this.none];
      }
    } else {
      if (event.value.length == 0) {
        this.selection = [this.default];
      }
      else {
        let index = this.selection.indexOf(this.default);
        if (index >= 0) {
          this.selection.splice(index, 1);
        }
      }
    }

    this.relay.navigate({ [this.key]: this.selection });
  }
}
