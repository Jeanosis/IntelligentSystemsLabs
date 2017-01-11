import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralComponent }   from './general.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [GeneralComponent],
    declarations: [GeneralComponent]
})
export class GeneralModule { }
