import { Component, OnInit, Input } from '@angular/core';
import { EventAggregator } from 'app/shared/messages/event.aggregator';

@Component({
    selector: 'app-select',
    templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {

    @Input()
    public channel: string;

    @Input()
    public label: string;

    @Input()
    public default: string = "ALL";

    @Input()
    public options: Option[] = [];

    constructor(private mediator: EventAggregator) {
    }

    ngOnInit() {
        if (!this.channel)
            throw new Error("the channel is required");
    }

    public visible(): Option[] {
        return this.options.filter(p => !p.hidden);
    }

    public changed(key: any) {
        var option = this.options.find(p => p.key == key);
        if (option)
            this.mediator.publish(this.channel, option);
    }
}

class Option {
    key: any;
    value: any;
    disabled?: boolean;
    hidden?: boolean;
}