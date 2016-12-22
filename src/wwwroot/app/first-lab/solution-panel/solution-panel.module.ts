import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionPanelComponent }   from './solution-panel.component';
/*import { PersonService, Person } from './person.service';*/

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [SolutionPanelComponent],
    declarations: [SolutionPanelComponent]/*,
    providers: [PersonService]*/
})
export class SolutionPanelModule { }