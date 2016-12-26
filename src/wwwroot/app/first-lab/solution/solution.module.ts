import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionComponent }   from './solution.component';
/*import { PersonService, Person } from './person.service';*/

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [SolutionComponent],
    declarations: [SolutionComponent]/*,
    providers: [PersonService]*/
})
export class SolutionModule { }