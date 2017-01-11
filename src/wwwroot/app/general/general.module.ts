import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralComponent }   from './general.component';
import { SyncModule } from '../shared/sync/sync.module';
import { SyncService } from '../shared/sync/sync.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SyncModule
    ],
    exports: [GeneralComponent],
    declarations: [GeneralComponent]
})
export class GeneralModule { }
