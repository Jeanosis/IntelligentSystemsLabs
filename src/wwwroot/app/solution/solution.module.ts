import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionInputModule } from './solution-input/solution-input.module';
import { SolutionResultsModule } from './solution-results/solution-results.module';

//import { SyncModule } from '../shared/sync/sync.module';
import { SolutionComponent }   from './solution.component';
/*import { PersonService, Person } from './person.service';*/
//console.log('Sync Solution', SyncModule);
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        SolutionRoutingModule,
        SolutionInputModule,
        SolutionResultsModule//,
        //SyncModule
    ],
    exports: [SolutionComponent],
    declarations: [SolutionComponent]
})
export class SolutionModule { }