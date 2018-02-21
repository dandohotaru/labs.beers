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
  public max: number = 1;

  @Input()
  public options: SelectOption[];

  @Input()
  public aspects: SelectOption[];

  @Input()
  public selection: string[];

  private defaults: { all, none } = { all: "*", none: "none" };

  constructor(private relay: RelayService) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
    // Options
    if (changes["options"] && this.options) {
    }

    // Aspects
    if (changes["aspects"] && this.options && this.aspects) {
      this.options.forEach(option => {
        option.disabled = !this.aspects.find(aspect => aspect.value == option.value);
      });
    }

    // Selection
    if (changes["selection"]) {
      if (!this.selection)
        this.selection = [this.defaults.all]
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public changed(event: { value: { value: string | number }[], itemValue: string | number }) {
    if (event.itemValue == this.defaults.all) {
      let index = this.selection.indexOf(this.defaults.all);
      if (index >= 0) {
        this.selection = [this.defaults.all];
      }
      else {
        this.selection = [this.defaults.none];
      }
    } else {
      if (event.value.length == 0) {
        this.selection = [this.defaults.all];
      }
      else {
        let index = this.selection.indexOf(this.defaults.all);
        if (index >= 0) {
          this.selection.splice(index, 1);
        }
      }
    }

    this.relay.navigate({ [this.key]: this.selection });
  }
}
