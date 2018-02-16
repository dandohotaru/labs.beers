import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public facets: FilterOption[];

  constructor(private relay: RelayService, private route: ActivatedRoute) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    var params = this.route.snapshot.queryParams;

    let optionsChanges = changes["options"];
    if (optionsChanges && this.options){
      this.options.forEach(p => {
        p.selected = p.value == params[this.key];
      });
    }

    let facetsChanges = changes["facets"];
    if (facetsChanges && this.options) {
      let facets = facetsChanges.currentValue;
      this.options.forEach(p => {
        p.disabled = !facets.find(o => o.value == p.value);
        p.selected = p.value == params[this.key];
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
