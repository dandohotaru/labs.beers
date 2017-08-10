import { NgModule } from '@angular/core';

import { FilterByQueriesPipe } from './query.pipes';
import { QueryProvider } from './query.provider';

@NgModule({
    imports: [],
    exports: [FilterByQueriesPipe],
    declarations: [FilterByQueriesPipe],
    providers: [QueryProvider],
})
export class QueryModule { }
