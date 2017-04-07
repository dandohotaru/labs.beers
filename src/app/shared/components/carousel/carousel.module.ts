import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCarousel } from './carousel.component';
import { NgbSlide } from "./slide.directive";
import { NgbCarouselConfig } from './carousel.config';

@NgModule({
    declarations: [
        NgbCarousel,
        NgbSlide
    ],
    exports: [
        NgbCarousel,
        NgbSlide
    ],
    imports: [
        CommonModule
    ],
    providers: [
        NgbCarouselConfig
    ]
})
export class NgbCarouselModule { }