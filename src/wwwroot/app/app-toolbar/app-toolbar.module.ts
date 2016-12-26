import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppToolbarComponent }   from './app-toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot()
    ],
    exports: [AppToolbarComponent],
    declarations: [AppToolbarComponent]/*,
    providers: [],*/
})
export class AppToolbarModule { }