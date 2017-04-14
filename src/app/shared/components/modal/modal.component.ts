declare var $: any;

import 'rxjs/add/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {

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

    @Output() 
    submitted = new EventEmitter();

    @Output() 
    dismissed = new EventEmitter();

    private modal: any;

    constructor(private reference: ElementRef, private modalService: ModalService) {
    }

    ngOnInit(): void {

        this.modal = $(this.reference.nativeElement).find(".modal").first();
        if (!this.modal)
        {
            console.warn("The underlying modal element could not be found");
            return;
        }

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

    open(): void {
        var options = {
            backdrop: true,
            keyboard: true,
            show: true,
        };

        this.modal.modal(options);
    }

    close(): void {
        this.modal.modal("hide");
    }

    submit(): void {
        this.submitted.next();
        this.close();
    }

    dismiss(): void {
        this.dismissed.next();
        this.close();
    }
}