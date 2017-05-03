
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from "app/shared/pipes/pipes.module";
import { ModalModule } from "app/shared/components/modal/modal.module";
import { WallModule } from 'app/shared/components/cards/colcade3/wall.module';
import { CardsModule } from 'app/shared/components/cards/colcade1/cards.module';
import { ColcadeModule } from "app/shared/components/cards/colcade2/colcade.module";
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { BeerListComponent } from './beer-list.component';
import { BeerCardComponent } from './beer-card.component';
import { BeerItemComponent } from './beer-item.component';

@NgModule({ 
  imports: [
    CommonModule,
    PipesModule,
    WallModule,
    CardsModule,
    ColcadeModule,
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
