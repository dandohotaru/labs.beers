import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersComponent } from './beers.component';
import { BeersService } from './beers.service';

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
    BeersService
  ]
})
export class BeersModule { }
