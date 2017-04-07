import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { SlideDirective } from "./slide.directive";
import { CarouselConfig } from './carousel.config';

/* Base on https://github.com/ng-bootstrap/ng-bootstrap/tree/master/src/carousel */
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