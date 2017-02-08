import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './layout/about.component';
import { HomeComponent } from './layout/home.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    // { path: '**', component: PageNotFoundComponent }
];


