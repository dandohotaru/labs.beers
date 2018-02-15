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
import { ReactiveSelectComponent } from './filters/reactive-select.component';
import { OrganicFilterComponent } from './filters/organic-filter.component';
import { YearFilterComponent } from './filters/year-filter.component';
import { AfterFilterComponent } from './filters/after-filter.component';
import { BeforeFilterComponent } from './filters/before-filter.component';
import { LetterFilterComponent } from './filters/letter-filter.component';
import { LengthFilterComponent } from './filters/length-filter.component';
import { SingleSelectComponent } from './filters/single-select.component';

import { BreweriesMapper } from './brewery-list.mappers';
import { OrganicFilterPipe } from './brewery-list.mappers';
import { YearFilterPipe } from './brewery-list.mappers';
import { AfterFilterPipe } from './brewery-list.mappers';
import { BeforeFilterPipe } from './brewery-list.mappers';
import { LetterFilterPipe } from './brewery-list.mappers';
import { LengthFilterPipe } from './brewery-list.mappers';

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
    ReactiveSelectComponent,
    SingleSelectComponent,
    OrganicFilterPipe,
    OrganicFilterComponent,
    YearFilterPipe,
    YearFilterComponent,
    AfterFilterPipe,
    AfterFilterComponent,
    BeforeFilterPipe,
    BeforeFilterComponent,
    LetterFilterPipe,
    LetterFilterComponent,
    LengthFilterPipe,
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