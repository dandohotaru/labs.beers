import { NgModule } from '@angular/core';
import { WallComponent } from './masonry';
import { BrickDirective } from './brick';
import { WatcherService } from "./observe.service";

@NgModule({
    declarations: [
        WallComponent,
        BrickDirective
    ],
    exports: [
        WallComponent,
        BrickDirective
    ],
    providers:[
        WatcherService
    ]
})
export class Masonry1Module { }