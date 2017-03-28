
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeersModule } from './../beers/beers.module';
import { BreweriesModule } from './../breweries/breweries.module';

import { SearchBarComponent } from './search-bar.component';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BeersModule,
    BreweriesModule
  ],
  declarations: [
    SearchBarComponent,
    SearchResultsComponent
  ],
  exports:[
    SearchBarComponent
  ],
  providers: [
  ]
})
export class SearchModule { }
