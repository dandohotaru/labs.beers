import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { SearchModule } from 'app/search/search.module';
import { CarouselModule } from "app/shared/components/carousel/carousel.module";
import { NgbCarouselModule } from "app/shared/components/carousel2/carousel.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
    CarouselModule,
    NgbCarouselModule
  ],  
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
