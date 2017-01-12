import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TaskRoutingModule } from './task-routing.module';

import { TaskInputParamsModule } from './task-input-params/task-input-params.module';
import { TaskInputParamModule } from './task-input-param/task-input-param.module';
import { TaskComponent }       from './task.component';
import { PersonService, Person }    from './person.service';
import { SyncModule }    from '../shared/sync/sync.module';
import { StorageService } from '../shared/storage.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        TaskRoutingModule,
        TaskInputParamsModule,
        TaskInputParamModule,
        SyncModule.forRoot()
    ],
    exports: [TaskComponent],
    declarations: [TaskComponent],
    providers: [PersonService, StorageService]
})
export class TaskModule { }