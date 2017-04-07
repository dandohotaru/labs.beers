import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { SlideDirective } from "./slide.directive";
import { CarouselConfig } from './carousel.config';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CarouselComponent,
        SlideDirective
    ],
    exports: [
        CarouselComponent,
        SlideDirective
    ],
    providers: [
        CarouselConfig
    ]
})
export class CarouselModule { }