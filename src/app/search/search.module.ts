
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SearchComponent
  ],
  exports:[
    SearchComponent
  ],
  providers: [
  ]
})
export class SearchModule { }
