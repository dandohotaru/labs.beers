
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeersModule } from './../beers/beers.module';
import { BreweriesModule } from './../breweries/breweries.module';
import { SearchService } from "./search.service";
import { SearchBarComponent } from './search-bar.component';
import { SearchResultsComponent } from './search-results.component';
import { SearchHistoryComponent } from './search-history.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BeersModule,
    BreweriesModule
  ],
  declarations: [
    SearchBarComponent,
    SearchResultsComponent,
    SearchHistoryComponent
  ],
  exports:[
    SearchBarComponent,
    SearchResultsComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
