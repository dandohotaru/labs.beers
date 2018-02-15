
import { NgModule } from '@angular/core';

import { FilterByQueriesPipe } from './query.pipes';
import { QueryProvider } from './query.provider';
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
        QueryProvider,
        RelayService,
    ],
})
export class FiltersModule { }
