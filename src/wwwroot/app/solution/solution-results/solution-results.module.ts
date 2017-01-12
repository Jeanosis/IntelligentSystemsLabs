import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { StorageService } from '../../shared/storage.service';
import { SolutionResultsComponent }   from './solution-results.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [SolutionResultsComponent],
    declarations: [SolutionResultsComponent],
    providers:[StorageService]
})
export class SolutionResultsModule { }