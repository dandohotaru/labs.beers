import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { Colcade3Module } from 'app/shared/components/cards/colcade3/mason.module';
import { CardsModule } from 'app/shared/components/cards/colcade1/cards.module';
import { SelectModule } from "app/shared/components/select/select.module";

import { BreweryListComponent } from './brewery-list.component';
import { BreweryFilterComponent } from "app/breweries/brewery-filter.component";
import { BreweryCardComponent } from './brewery-card.component';

import { EventAggregator } from 'app/shared/messages/event.aggregator';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ModalModule,
    Colcade3Module,
    CardsModule,
    SelectModule,
  ],
  declarations: [
    BreweryListComponent,
    BreweryCardComponent,
    BreweryFilterComponent,
  ],
  exports: [
    BreweryListComponent
  ],
  providers:[
    EventAggregator
  ]
})
export class BreweriesModule { }
