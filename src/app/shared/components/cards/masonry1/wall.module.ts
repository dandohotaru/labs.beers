import { NgModule } from '@angular/core';
import { WallComponent } from './wall.component';
import { BrickDirective } from './brick.directive';
import { WatcherService } from "./watch.service";

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