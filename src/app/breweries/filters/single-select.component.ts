import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

interface FilterOption {
  value: string | number | boolean,
  label: string,
  disabled?: boolean,
  selected?: boolean,
}

interface FilterOutput {
  value: string
}

@Component({
  selector: 'single-select',
  templateUrl: 'single-select.component.html'
})
export class SingleSelectComponent implements OnInit, OnDestroy, OnChanges {

   @Input()
  public label: string;

  @Input()
  public options: FilterOption[];

  @Input()
  public aspects: FilterOption[];

  @Input()
  public selection: string;

  @Output()
  public changed: EventEmitter<FilterOutput> = new EventEmitter<FilterOutput>();

  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges): void {

    // Options
    if (changes["options"] && this.options){
      this.options.forEach(option => {
        option.selected = option.value == this.selection;
      });
    }

    // Aspects
    if (changes["aspects"] && this.options && this.aspects) {
      this.options.forEach(option => {
        option.disabled = !this.aspects.find(aspect => aspect.value == option.value);
        option.selected = option.value == this.selection;
      });
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public handle(event: { value: string, text: string }) {
    this.changed.emit({
      value: event.value,
    });
  }
}
