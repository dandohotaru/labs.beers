declare var $: any;

import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/toPromise';

import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {

    @Input() 
    title: string;

    @Input() 
    size: "small" | "large";

    @Output() 
    opening = new EventEmitter();

    @Output() 
    opened = new EventEmitter();

    @Output() 
    closing = new EventEmitter();

    @Output() 
    closed = new EventEmitter();

    private modal: any;

    constructor(private reference: ElementRef, private modalService: ModalService) {
    }

    ngOnInit(): void {

        this.modal = $(this.reference.nativeElement).find(".modal").first();
        if (!this.modal)
            console.warn("The underlying modal element could not be found");

        Observable.fromEvent(this.modal, "show.bs.modal")
            .subscribe(p => {
                this.opening.next();
            });

        Observable.fromEvent(this.modal, "shown.bs.modal")
            .subscribe(p => {
                this.opened.next();
            });

        Observable.fromEvent(this.modal, "hide.bs.modal")
            .subscribe(p => {
                this.closing.next();
            });

        Observable.fromEvent(this.modal, "hidden.bs.modal")
            .subscribe(p => {
                this.closed.next();
            });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this);
    }

    show(): void {
        var options = {
            backdrop: true,
            keyboard: true,
            show: true,
        };

        this.modal.modal(options);
    }

    hide(): void {
        this.modal.modal("hide");
    }
}