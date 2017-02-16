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
  ],
  providers:[
  ]
})
export class BeersModule { }
