import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TaskClassComponent }   from './task-class.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [TaskClassComponent],
    declarations: [TaskClassComponent]
})
export class TaskClassModule { }