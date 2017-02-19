
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerListComponent } from './beer-list.component';
import { BeerCardComponent } from './beer-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeerListComponent,
    BeerCardComponent,
  ],
  exports: [
    BeerListComponent,
    BeerCardComponent
  ],
  providers:[
  ]
})
export class BeersModule { }
