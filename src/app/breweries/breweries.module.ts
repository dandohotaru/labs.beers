import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { MasonModule } from './../shared/components/mason/mason.module';
import { CardsModule } from './../shared/components/cards/cards.module';

import { BreweryListComponent } from './brewery-list.component';
import { BreweryCardComponent } from './brewery-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ModalModule,
    MasonModule,
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
