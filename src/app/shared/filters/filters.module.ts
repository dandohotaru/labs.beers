import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';

import { FilterByQueriesPipe } from './query.pipes';
import { QueryService } from './query.service';
import { RelayService } from './relay.service';

import { ReactiveSelectComponent } from './select/reactive-select.component';
import { SingleSelectComponent } from './select/single-select.component';
import { MultiSelectComponent } from './select/multi-select.component';
import { RangeSelectComponent } from './select/range-select.component';
import { SingleSelectPipe } from './select/various.pipes';
import { MultipleSelectPipe } from './select/various.pipes';
import { StartRangePipe } from './select/various.pipes';
import { EndRangePipe } from './select/various.pipes';

@NgModule({
	imports: [
		CommonModule,
		MultiSelectModule,
		CalendarModule,
		FormsModule,
	],
	exports: [
		FilterByQueriesPipe,
		ReactiveSelectComponent,
		SingleSelectComponent,
		SingleSelectPipe,
		MultiSelectComponent,
		MultipleSelectPipe,
		RangeSelectComponent,
		StartRangePipe,
		EndRangePipe,
	],
	declarations: [
		FilterByQueriesPipe,
		ReactiveSelectComponent,
		SingleSelectComponent,
		SingleSelectPipe,
		MultiSelectComponent,
		MultipleSelectPipe,
		RangeSelectComponent,
		StartRangePipe,
		EndRangePipe,
	],
	providers: [
		QueryService,
		RelayService,
	],
})
export class FiltersModule { }
