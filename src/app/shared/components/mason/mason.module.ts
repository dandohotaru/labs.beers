import { NgModule } from '@angular/core';

import { MasonGridComponent } from './mason-grid.component';
import { MasonColumnDirective } from './mason-column.directive';
import { MasonBrickDirective } from './mason-brick.directive';

@NgModule({
  declarations: [
    MasonGridComponent,
    MasonColumnDirective,
    MasonBrickDirective
  ],
  exports: [
    MasonGridComponent,
    MasonColumnDirective,
    MasonBrickDirective
  ]
})

export class MasonModule { }
