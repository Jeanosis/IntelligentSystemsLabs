import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';

//import { AppRoutingModule } from './app-routing.module';
import { GeneralModule } from './general/general.module';

import { AppComponent } from './app.component';
import { SomeService } from './shared/some.service';

@NgModule({
    imports: [
        BrowserModule,
        //HttpModule,
        //MaterialModule.forRoot(),
        //AppRoutingModule,
        GeneralModule
    ],
    declarations: [AppComponent],
    providers: [SomeService],
    bootstrap: [AppComponent],
})
export class AppModule { }