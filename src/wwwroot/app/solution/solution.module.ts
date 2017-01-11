import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionInputModule } from './solution-input/solution-input.module';
import { SolutionResultsModule } from './solution-results/solution-results.module';

import { SolutionComponent }   from './solution.component';
/*import { PersonService, Person } from './person.service';*/

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        SolutionRoutingModule,
        SolutionInputModule,
        SolutionResultsModule
    ],
    exports: [SolutionComponent],
    declarations: [SolutionComponent]
})
export class SolutionModule { }