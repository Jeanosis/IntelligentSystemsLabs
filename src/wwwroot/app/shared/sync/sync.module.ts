import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyncService } from './sync.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [SyncService]
})
export class SyncModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: SyncModule, providers: [SyncService]};
    }
}