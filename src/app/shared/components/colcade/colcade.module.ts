import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from "app/shared/pipes/pipes.module";

import { ColcadeComponent } from './colcade';

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
    ],
    exports: [
        ColcadeComponent
    ],
    declarations: [
        ColcadeComponent
    ],
    providers: [
    ],
})
export class ColcadeModule { }
