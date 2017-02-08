import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BreweriesComponent } from './breweries.component';
import { BreweriesService } from './breweries.service';

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
    BreweriesService
  ]
})
export class BreweriesModule { }
