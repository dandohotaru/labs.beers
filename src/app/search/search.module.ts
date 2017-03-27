
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search-bar.component';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
