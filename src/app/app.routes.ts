
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home.component';
import { LostComponent } from './layout/lost.component';
import { AboutComponent } from './layout/about.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BeerListComponent } from './beers/beer-list.component';
import { GlossaryComponent } from './layout/glossary.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'glossary', component: GlossaryComponent },
    { path: 'breweries', component: BreweriesComponent },
    { path: 'beers', component: BeerListComponent },
    { path: '**', component: LostComponent }
];