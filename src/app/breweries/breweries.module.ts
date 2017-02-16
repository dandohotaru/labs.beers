import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BreweriesComponent } from './breweries.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    BreweriesComponent
  ],
  exports: [
    BreweriesComponent
  ],
  providers:[
  ]
})
export class BreweriesModule { }
