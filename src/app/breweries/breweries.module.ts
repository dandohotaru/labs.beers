import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { Colcade3Module } from 'app/shared/components/cards/colcade3/mason.module';
import { Masonry1Module } from "app/shared/components/cards/masonry1/mason.module";
import { CardsModule } from 'app/shared/components/cards/colcade1/cards.module';
import { SelectModule } from "app/shared/components/select/select.module";
import { FiltersModule } from 'app/shared/filters/filters.module';

import { BreweryListComponent } from './brewery-list.component';
import { BreweryCardComponent } from './brewery-card.component';
import { SelectFilterComponent } from './filters/select-filter.component';
import { OrganicFilterComponent } from './filters/organic-filter.component';
import { YearFilterComponent } from './filters/year-filter.component';
import { AfterFilterComponent } from './filters/after-filter.component';
import { BeforeFilterComponent } from './filters/before-filter.component';
import { LetterFilterComponent } from './filters/letter-filter.component';
import { LengthFilterComponent } from './filters/length-filter.component';

import { BreweriesMapper } from './brewery-map.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ModalModule,
    Colcade3Module,
    Masonry1Module,
    CardsModule,
    SelectModule,
    FiltersModule,
  ],
  declarations: [
    BreweryListComponent,
    BreweryCardComponent,
    SelectFilterComponent,
    OrganicFilterComponent,
    YearFilterComponent,
    AfterFilterComponent,
    BeforeFilterComponent,
    LetterFilterComponent,
    LengthFilterComponent,
  ],
  exports: [
    BreweryListComponent
  ],
  providers:[
    BreweriesMapper
  ]
})
export class BreweriesModule { }