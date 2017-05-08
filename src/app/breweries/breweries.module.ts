import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { Colcade3Module } from './../shared/components/cards/colcade3/mason.module';
import { CardsModule } from './../shared/components/cards/colcade1/cards.module';

import { BreweryListComponent } from './brewery-list.component';
import { BreweryCardComponent } from './brewery-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ModalModule,
    Colcade3Module,
    CardsModule,
  ],
  declarations: [
    BreweryListComponent,
    BreweryCardComponent
  ],
  exports: [
    BreweryListComponent
  ],
  providers:[
  ]
})
export class BreweriesModule { }
