import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home.component';
import { AboutComponent } from './layout/about.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BeersComponent } from './beers/beers.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'breweries', component: BreweriesComponent },
    { path: 'beers', component: BeersComponent },
    // { path: '**', component: PageNotFoundComponent }
];