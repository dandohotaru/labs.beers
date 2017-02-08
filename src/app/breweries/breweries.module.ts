import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweriesComponent } from './breweries.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreweriesComponent
  ],
  exports: [
    BreweriesComponent
  ]
})
export class BreweriesModule { }
