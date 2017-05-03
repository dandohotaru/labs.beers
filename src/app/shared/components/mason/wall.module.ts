import { NgModule } from '@angular/core';

import { WallComponent } from './wall.component';
import { BrickDirective } from './brick.directive';

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

export class WallModule { }
