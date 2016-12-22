import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppToolbarComponent }   from './app-toolbar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [AppToolbarComponent],
    declarations: [AppToolbarComponent]/*,
    providers: [],*/
})
export class AppToolbarModule { }