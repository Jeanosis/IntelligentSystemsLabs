import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

//import { SyncService } from '../../shared/sync.service';
import { SyncModule } from '../../shared/sync/sync.module';
import { StorageService } from '../../shared/storage.service';
import { SolutionInputComponent }   from './solution-input.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        SyncModule
    ],
    exports: [SolutionInputComponent],
    declarations: [SolutionInputComponent],
    providers: [StorageService]
})
export class SolutionInputModule { }
