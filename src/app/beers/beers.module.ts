
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { MasonModule } from 'app/shared/components/mason/mason.module';
import { CardsModule } from 'app/shared/components/cards/cards.module';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { BeerListComponent } from './beer-list.component';
import { BeerCardComponent } from './beer-card.component';
import { BeerItemComponent } from './beer-item.component';

@NgModule({ 
  imports: [
    CommonModule,
    MasonModule,
    CardsModule,
    ModalModule,
    VirtualScrollModule,
  ],
  declarations: [
    BeerListComponent,
    BeerCardComponent,
    BeerItemComponent
  ],
  exports: [
    BeerListComponent
  ],
  providers:[
  ]
})
export class BeersModule { }
