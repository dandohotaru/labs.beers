import { Component, OnInit, Input, EventEmitter, Output, trigger } from '@angular/core';

interface OptionModel {
    value: string | number | boolean;
    label: string | number | boolean;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
}

@Component({
    selector: 'app-select',
    templateUrl: 'select.component.html',
    styleUrls: ['select.component.css']
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

    public ngOnInit() {
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