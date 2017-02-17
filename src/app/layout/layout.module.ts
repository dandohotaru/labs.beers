

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchModule } from './../search/search.module';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { LostComponent } from './lost.component';
import { GlossaryComponent } from './glossary.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LostComponent,
    GlossaryComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LostComponent,
    GlossaryComponent,
  ]
})
export class LayoutModule { }
