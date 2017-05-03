import { NgModule } from '@angular/core';

import { WallComponent } from './wall.component';
import { BrickDirective } from './brick.directive';

@NgModule({
  declarations: [
    BrickDirective,
    WallComponent,
  ],
  exports: [
    BrickDirective,
    WallComponent,
  ]
})

export class WallModule { }
