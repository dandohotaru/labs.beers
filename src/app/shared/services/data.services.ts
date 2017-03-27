import { NgModule } from '@angular/core';

import { BreweriesService } from './breweries.service';
import { BeersService } from './beers.service';

@NgModule({
    imports: [],
    exports: [
        BeersService,
        BreweriesService,
    ],
    declarations: [],
    providers: [
        BeersService,
        BreweriesService,
    ],
})
export class DataServicesModule { }
