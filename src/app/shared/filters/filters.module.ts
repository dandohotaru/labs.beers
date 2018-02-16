
import { NgModule } from '@angular/core';

import { FilterByQueriesPipe } from './query.pipes';
import { QueryService } from './query.service';
import { RelayService } from './relay.service';

@NgModule({
    imports: [
    ],
    exports: [
        FilterByQueriesPipe
    ],
    declarations: [
        FilterByQueriesPipe
    ],
    providers: [
        QueryService,
        RelayService,
    ],
})
export class FiltersModule { }
