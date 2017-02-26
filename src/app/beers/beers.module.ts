
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonModule } from './../shared/components/mason/mason.module';
import { CardsModule } from './../shared/components/cards/cards.module';

import { BeerListComponent } from './beer-list.component';
import { BeerCardsComponent } from './beer-cards.component';
import { BeerCardComponent } from './beer-card.component';

@NgModule({
  imports: [
    CommonModule,
    MasonModule,
    CardsModule
  ],
  declarations: [
    BeerListComponent,
    BeerCardsComponent,
    BeerCardComponent,
  ],
  exports: [
    BeerListComponent
  ],
  providers:[
  ]
})
export class BeersModule { }
