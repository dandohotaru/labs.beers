

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { LostComponent } from 'app/layout/lost.component';
import { AboutComponent } from 'app/layout/about.component';
import { BreweryListComponent } from 'app/breweries/brewery-list.component';
import { BeerListComponent } from 'app/beers/beer-list.component';
import { GlossaryComponent } from 'app/layout/glossary.component';
import { SearchResultsComponent } from 'app/search/search-results.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'glossary', component: GlossaryComponent },
    { path: 'breweries', component: BreweryListComponent },
    { path: 'beers', component: BeerListComponent },
    { path: 'search', component: SearchResultsComponent },
    { path: '**', component: LostComponent }
];