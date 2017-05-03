import { NgModule } from '@angular/core';
import { WallComponent } from './masonry';
import { BrickDirective } from './brick';

@NgModule({
    declarations: [
        WallComponent,
        BrickDirective
    ],
    exports: [
        WallComponent,
        BrickDirective
    ]
})
export class Masonry1Module { }