import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TaskInputParamsComponent }   from './task-input-params.component';
import { InputParamService } from '../../../shared/input-param.service';

@NgModule({
    imports: [CommonModule, FormsModule, MaterialModule.forRoot()],
    exports: [TaskInputParamsComponent],
    declarations: [TaskInputParamsComponent],
    providers: [InputParamService]
})
export class TaskInputParamsModule { }