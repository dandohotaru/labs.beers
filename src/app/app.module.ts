import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { BreweriesModule } from './breweries/breweries.module';
import { BeersModule } from './beers/beers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    LayoutModule,
    BreweriesModule,
    BeersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
