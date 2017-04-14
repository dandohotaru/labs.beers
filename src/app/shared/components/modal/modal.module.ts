import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
    imports: [],
    declarations: [ModalComponent],
    exports: [ModalComponent],
    providers: [ModalService],
})
export class ModalModule { }
