import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';

import { TaskInputParamsModule } from './task-input-params/task-input-params.module';
import { TaskComponent }       from './task.component';
import { PersonService, Person }    from './person.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TaskRoutingModule,
        TaskInputParamsModule
    ],
    exports: [TaskComponent],
    declarations: [TaskComponent],
    providers: [PersonService]
})
export class TaskModule { }