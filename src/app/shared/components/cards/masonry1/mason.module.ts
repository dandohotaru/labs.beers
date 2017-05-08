import { NgModule } from '@angular/core';
import { WallComponent } from './wall.component';
import { BrickComponent } from './brick.component';
import { WatcherService } from "./watch.service";

@NgModule({
    declarations: [
        WallComponent,
        BrickComponent
    ],
    exports: [
        WallComponent,
        BrickComponent
    ],
    providers:[
        WatcherService
    ]
})
export class Masonry1Module { }