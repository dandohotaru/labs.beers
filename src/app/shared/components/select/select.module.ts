import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';

@NgModule({
    imports: [CommonModule],
    exports: [SelectComponent],
    declarations: [SelectComponent],
    providers: [],
})
export class SelectModule { }
