import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { SearchModule } from 'app/search/search.module';
import { CarouselModule } from "app/shared/components/carousel/carousel.module";
import { TooltipModule } from 'app/shared/components/tooltips/tooltip.module';
import { PopoverModule } from "app/shared/components/popover/popover.module";

import { CardsModule } from "app/shared/components/cards/bricklayer1/cards.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    TooltipModule,
    PopoverModule,
    SearchModule,
    CardsModule,
  ],  
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
