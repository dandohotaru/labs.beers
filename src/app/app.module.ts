
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DialogModule }  from 'primeng/primeng';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { SearchModule } from './search/search.module';
import { BreweriesModule } from './breweries/breweries.module';
import { BeersModule } from './beers/beers.module';

import { ErrorHandler } from './shared/exceptions/error.handler';
import { BeersService } from './shared/services/beers.service';
import { EventAggregator } from 'aurelia-event-aggregator';

import { BreweriesService } from './shared/services/breweries.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    DialogModule,
    LayoutModule,
    SearchModule,
    BreweriesModule,
    BeersModule
  ],
  providers: [
    ErrorHandler,
    BreweriesService,
    BeersService,
    EventAggregator
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
