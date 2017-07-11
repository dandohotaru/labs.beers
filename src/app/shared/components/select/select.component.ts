import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {

    @Input()
    public label: string;

    @Input()
    public options: OptionModel[] = [];

    @Output()
    public changed: EventEmitter<OptionModel> = new EventEmitter<OptionModel>();

    constructor() {
    }

    ngOnInit() {
    }

    public visible(): OptionModel[] {
        return this.options.filter(p => !p.hidden);
    }

    public handle(target: any) {
        var option = this.options.find(p => p.value == target.value);
        if (option) {
            this.changed.emit(option);
        }
    }
}

class OptionModel {
    value: string | number | boolean;
    text: string | number | boolean;
    disabled?: boolean;
    hidden?: boolean;
}