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
    id: string;

    @Input() 
    title: string;

    @Output() 
    opening = new EventEmitter();

    @Output() 
    opened = new EventEmitter();

    @Output() 
    closing = new EventEmitter();

    @Output() 
    closed = new EventEmitter();

    private instance: any;

    constructor(private reference: ElementRef, private modalService: ModalService) {
    }

    ngOnInit(): void {

        this.instance = $(this.reference.nativeElement).find("#myModal");

        Observable.fromEvent(this.instance, "show.bs.modal")
            .subscribe(p => {
                this.opening.next();
            });

        Observable.fromEvent(this.instance, "shown.bs.modal")
            .subscribe(p => {
                this.opened.next();
            });

        Observable.fromEvent(this.instance, "hide.bs.modal")
            .subscribe(p => {
                this.closing.next();
            });

        Observable.fromEvent(this.instance, "hidden.bs.modal")
            .subscribe(p => {
                this.closed.next();
            });


        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
    }

    open(): void {
        var options = {
            backdrop: true,
            keyboard: true,
            show: true,
        };

        this.instance.modal(options);
    }

    close(): void {
        this.instance.modal("hide");
        //console.log("modal closed")
    }
}