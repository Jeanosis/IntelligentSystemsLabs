import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLabRoutingModule } from './first-lab-routing.module';
import { TaskPanelModule } from './task-panel/task-panel.module';
import { SolutionPanelModule } from './solution-panel/solution-panel.module';

import { FirstLabComponent } from './first-lab.component';
/*import { PersonService } from './person.service';*/

@NgModule({
    imports: [
        CommonModule,
        FirstLabRoutingModule,
        TaskPanelModule,
        SolutionPanelModule
    ],
    exports: [FirstLabComponent],
    declarations: [FirstLabComponent]/*,
    providers: [PersonService]*/
})
export class FirstLabModule { }
