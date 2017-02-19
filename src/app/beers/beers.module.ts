
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonModule } from './../shared/components/mason/mason.module';

import { BeerListComponent } from './beer-list.component';
import { BeerCardComponent } from './beer-card.component';

@NgModule({
  imports: [
    CommonModule,
    MasonModule
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
