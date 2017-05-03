import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './cards.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CardsComponent
    ],
    declarations: [
        CardsComponent
    ],
    providers: [
    ],
})
export class CardsModule { }
