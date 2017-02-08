import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersComponent } from './beers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeersComponent
  ],
  exports: [
    BeersComponent
  ]
})
export class BeersModule { }
