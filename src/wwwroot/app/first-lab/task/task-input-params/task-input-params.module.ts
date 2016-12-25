import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { TaskInputParamsComponent }   from './task-input-params.component';
import { InputParamService } from '../../../shared/input-param.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [TaskInputParamsComponent],
    declarations: [TaskInputParamsComponent],
    providers: [InputParamService]
})
export class TaskInputParamsModule { }