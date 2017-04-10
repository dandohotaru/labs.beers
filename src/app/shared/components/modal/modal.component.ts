import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = $(el.nativeElement);

    }

    ngOnInit(): void {
        let modal = this;
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        //this.element.appendTo('body');

        this.element.on('click', function (e: any) {
            var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        //this.element.show();
        
        //$('myModal').modal('show');
        

        //$('body').addClass('modal-open');
    }

    close(): void {
        //this.element.hide();
        //$('body').removeClass('modal-open');
    }
}