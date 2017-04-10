import { NgModule } from '@angular/core';

import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';

@NgModule({
    imports: [],
    declarations: [ModalComponent],
    exports: [ModalComponent],
    providers: [ModalService],
})
export class ModalModule { }
