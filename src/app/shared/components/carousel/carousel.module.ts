import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';

/*
  based on 
  https://github.com/valor-software/ng2-bootstrap/tree/development/src/carousel
*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlideComponent,
    CarouselComponent
  ],
  exports: [
    SlideComponent,
    CarouselComponent
  ],
  providers: [
    CarouselConfig
  ]
})
export class CarouselModule { }

