import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/*import { TaskPanelRoutingModule } from './task-panel-routing.module';*/

import { TaskPanelComponent }   from './task-panel.component';
import { PersonService, Person } from './person.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule/*,
        TaskPanelRoutingModule*/
    ],
    exports: [TaskPanelComponent],
    declarations: [TaskPanelComponent],
    providers: [PersonService]
})
export class TaskPanelModule { }