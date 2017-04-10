import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { SearchModule } from 'app/search/search.module';
import { CarouselModule } from "app/shared/components/carousel/carousel.module";
import { ModalModule } from "app/shared/components/modal/modal.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    CarouselModule,
    SearchModule,
  ],  
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
