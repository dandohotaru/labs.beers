
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from "app/shared/pipes/pipes.module";
import { Masonry1Module } from "app/shared/components/cards/masonry1/wall.module";
import { ModalModule } from "app/shared/components/modal/modal.module";
import { ColcadeModule } from "app/shared/components/cards/colcade2/colcade.module";
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { WindowScrollDirective } from "app/shared/directives/scroll/window-scroll.directive";

import { BeerListComponent } from './beer-list.component';
import { BeerCardComponent } from './beer-card.component';
import { BeerItemComponent } from './beer-item.component';

@NgModule({ 
  imports: [
    CommonModule,
    PipesModule,
    Masonry1Module,
    ColcadeModule,
    ModalModule,
    //VirtualScrollModule,
    InfiniteScrollModule,
  ],
  declarations: [
    BeerListComponent,
    BeerCardComponent,
    BeerItemComponent,
    WindowScrollDirective
  ],
  exports: [
    BeerListComponent
  ],
  providers:[
  ]
})
export class BeersModule { }
