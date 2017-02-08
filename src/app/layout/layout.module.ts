import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
