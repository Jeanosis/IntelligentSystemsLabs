import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TaskService } from '../../shared/task.service';
import { SyncModule } from '../../shared/sync/sync.module';
import { StorageService } from '../../shared/storage.service';
import { SolutionInputComponent }   from './solution-input.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        SyncModule
    ],
    exports: [SolutionInputComponent],
    declarations: [SolutionInputComponent],
    providers: [StorageService, TaskService]
})
export class SolutionInputModule { }
