
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { MasonModule } from 'app/shared/components/mason/mason.module';
import { CardsModule } from 'app/shared/components/cards/cards.module';

import { BeerListComponent } from './beer-list.component';
import { BeerCardComponent } from './beer-card.component';

@NgModule({ 
  imports: [
    CommonModule,
    MasonModule,
    CardsModule,
    ModalModule,
  ],
  declarations: [
    BeerListComponent,
    BeerCardComponent,
  ],
  exports: [
    BeerListComponent
  ],
  providers:[
  ]
})
export class BeersModule { }
