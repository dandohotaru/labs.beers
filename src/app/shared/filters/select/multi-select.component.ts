import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

interface SelectInput extends SelectItem {
  value: string | number | boolean,
  label: string,
  disabled?: boolean,
}

interface SelectOutput {
  values: string[]
}

@Component({
  selector: 'multi-select',
  templateUrl: 'multi-select.component.html'
})
export class MultiSelectComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public max: number = 1;

  @Input()
  public label: string;

  @Input()
  public options: SelectInput[];

  @Input()
  public aspects: SelectInput[];

  @Input()
  public selection: string[];

  @Output()
  public changed: EventEmitter<SelectOutput> = new EventEmitter<SelectOutput>();

  private defaults: { all, none } = { all: "*", none: "none" };

  constructor() {
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

  public handle(event: { value: { value: string | number }[], itemValue: string | number }) {
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

    this.changed.emit({
      values: this.selection,
    });
  }
}
