

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home.component';
import { LostComponent } from './layout/lost.component';
import { AboutComponent } from './layout/about.component';
import { BreweryListComponent } from './breweries/brewery-list.component';
import { BeerListComponent } from './beers/beer-list.component';
import { GlossaryComponent } from './layout/glossary.component';
import { SearchResultsComponent } from './search/search-results.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'glossary', component: GlossaryComponent },
    { path: 'breweries', component: BreweryListComponent },
    { path: 'beers', component: BeerListComponent },
    { path: 'search', component: SearchResultsComponent },
    { path: '**', component: LostComponent }
];