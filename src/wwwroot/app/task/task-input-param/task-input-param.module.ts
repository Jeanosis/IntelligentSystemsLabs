import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TaskClassModule } from '../shared/task-class/task-class.module';

import { TaskInputParamComponent }   from './task-input-param.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        TaskClassModule
    ],
    exports: [TaskInputParamComponent],
    declarations: [TaskInputParamComponent]
})
export class TaskInputParamModule { }