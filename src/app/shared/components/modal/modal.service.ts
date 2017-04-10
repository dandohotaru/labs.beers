import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        var modal = this.modals.find(p => p.id == id);
        var index = this.modals.indexOf(modal);
        this.modals.splice(index, 1);
    }

    open(id: string) {
        var modal = this.modals.find(p => p.id == id);
        modal.open();
    }

    close(id: string) {
        var modal = this.modals.find(p => p.id == id);
        modal.close();
    }
}