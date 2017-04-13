import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { ModalHeader } from './modal.header';
import { ModalBody } from './modal.body';
import { ModalFooter } from './modal.footer';

import { ModalService } from './modal.service';

@NgModule({
    imports: [
    ],
    declarations: [
        ModalComponent,
        ModalHeader,
        ModalBody,
        ModalFooter
    ],
    exports: [
        ModalComponent,
        ModalHeader,
        ModalBody,
        ModalFooter
    ],
    providers: [
        ModalService
    ],
})
export class ModalModule { }
