import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from "app/home/demo.component";
import { TooltipModule } from 'app/shared/components/tooltips/tooltip.module';
import { PopoverModule } from "app/shared/components/popover/popover.module";

import { CardsModule } from "app/shared/components/cards/bricklayer1/cards.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule,
    PopoverModule,
    CardsModule,
  ],  
  declarations: [
    DemoComponent,
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
