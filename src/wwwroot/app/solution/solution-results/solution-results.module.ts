import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SolutionResultsComponent }   from './solution-results.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [SolutionResultsComponent],
    declarations: [SolutionResultsComponent]
})
export class SolutionResultsModule { }