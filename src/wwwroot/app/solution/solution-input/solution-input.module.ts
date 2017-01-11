import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SolutionInputComponent }   from './solution-input.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [SolutionInputComponent],
    declarations: [SolutionInputComponent]
})
export class SolutionInputModule { }
