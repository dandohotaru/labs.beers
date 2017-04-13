import { Injectable } from "@angular/core";
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
    private modals: ModalComponent[] = [];

    add(modal: ModalComponent) {
        this.modals.push(modal);
    }

    remove(modal: ModalComponent) {
        var index = this.modals.indexOf(modal);
        this.modals.splice(index, 1);
    }

    open(modal: ModalComponent) {
        modal.show();
    }

    close(modal: ModalComponent) {
        modal.hide();
    }
}