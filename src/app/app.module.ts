import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { LayoutModule } from 'app/layout/layout.module';
import { HomeModule } from "app/home/home.module";
import { SearchModule } from 'app/search/search.module';
import { BreweriesModule } from 'app/breweries/breweries.module';
import { BeersModule } from 'app/beers/beers.module';

import { ErrorHandler } from 'app/shared/exceptions/error.handler';
import { BeersService } from 'app/shared/services/beers.service';
import { SearchService } from 'app/search/search.service';
import { EventAggregator } from "app/shared/messages/event.aggregator";

import { BreweriesService } from 'app/shared/services/breweries.service';

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
    HomeModule,
    SearchModule,
    BreweriesModule,
    BeersModule
  ],
  providers: [
    ErrorHandler,
    EventAggregator,
    SearchService,
    BreweriesService,
    BeersService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
