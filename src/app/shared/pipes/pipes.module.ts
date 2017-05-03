import { NgModule } from '@angular/core';

import { TruncateCharsPipe } from './truncate.pipe';
import { TruncateWordsPipe } from './truncate.pipe';

@NgModule({
    declarations: [
        TruncateCharsPipe,
        TruncateWordsPipe
    ],
    imports: [],
    exports: [
        TruncateCharsPipe,
        TruncateWordsPipe
    ],
    providers: [],
})
export class PipesModule { }
