import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLabRoutingModule } from './first-lab-routing.module';
import { TaskModule } from './task/task.module';
import { SolutionModule } from './solution/solution.module';

import { FirstLabComponent } from './first-lab.component';
/*import { PersonService } from './person.service';*/

@NgModule({
    imports: [
        CommonModule,
        FirstLabRoutingModule,
        TaskModule,
        SolutionModule
    ],
    exports: [FirstLabComponent],
    declarations: [FirstLabComponent]/*,
    providers: [PersonService]*/
})
export class FirstLabModule { }
