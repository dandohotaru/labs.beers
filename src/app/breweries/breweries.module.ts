import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';

import { ModalModule } from "app/shared/components/modal/modal.module";
import { Colcade3Module } from 'app/shared/components/cards/colcade3/mason.module';
import { Masonry1Module } from "app/shared/components/cards/masonry1/mason.module";
import { CardsModule } from 'app/shared/components/cards/colcade1/cards.module';
import { SelectModule } from "app/shared/components/select/select.module";
import { FiltersModule } from 'app/shared/filters/filters.module';

import { BreweryListComponent } from './brewery-list.component';
import { BreweryCardComponent } from './brewery-card.component';
import { ReactiveSelectComponent } from './filters/reactive-select.component';
import { SingleSelectComponent } from './filters/single-select.component';
import { MultiSelectComponent } from './filters/multi-select.component';
import { RangeSelectComponent } from './filters/range-select.component';

import { BreweriesMapper } from './brewery-list.mappers';
import { OrganicFilterPipe } from './brewery-list.mappers';
import { YearFilterPipe } from './brewery-list.mappers';
import { AfterFilterPipe } from './brewery-list.mappers';
import { BeforeFilterPipe } from './brewery-list.mappers';
import { LetterFilterPipe } from './brewery-list.mappers';
import { LengthFilterPipe } from './brewery-list.mappers';
import { CreationFilterPipe } from './brewery-list.mappers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    MultiSelectModule,
    CalendarModule,
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
    MultiSelectComponent,
    RangeSelectComponent,
    OrganicFilterPipe,
    YearFilterPipe,
    AfterFilterPipe,
    BeforeFilterPipe,
    LetterFilterPipe,
    LengthFilterPipe,
    CreationFilterPipe,
  ],
  exports: [
    BreweryListComponent
  ],
  providers:[
    BreweriesMapper
  ]
})
export class BreweriesModule { }