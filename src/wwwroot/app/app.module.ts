import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { GeneralModule } from './general/general.module';

import { AppComponent } from './app.component';
import { SomeService } from './shared/some.service';

@NgModule({
    imports: [
        BrowserModule,
        GeneralModule
    ],
    declarations: [AppComponent],
    providers: [SomeService],
    bootstrap: [AppComponent],
})
export class AppModule { }