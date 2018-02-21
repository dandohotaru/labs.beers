import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RelayService } from 'app/shared/filters/relay.service';

interface FilterOption {
  value: string | number | boolean,
  label: string,
  disabled?: boolean,
  selected?: boolean,
}

@Component({
  selector: 'single-select',
  templateUrl: 'single-select.component.html'
})
export class SingleSelectComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public key: string;

  @Input()
  public label: string;

  @Input()
  public options: FilterOption[];

  @Input()
  public aspects: FilterOption[];

  @Input()
  public selection: string;

  constructor(private relay: RelayService) {
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

  public changed(event: { value: string, text: string }) {
    this.relay.navigate({ [this.key]: event.value });
  }
}
