import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
/*import { APP_BASE_HREF } from '@angular/common';*/
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { FirstLabModule } from './first-lab/first-lab.module';
import { AppToolbarModule } from './app-toolbar/app-toolbar.module';

import { AppComponent } from './app.component';
/*import { PersonService } from './person.service';*/

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        FirstLabModule,
        AppToolbarModule
    ],
    declarations: [AppComponent],
    /*providers: [
        PersonService/*,
        {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
        }
    ],*/
    bootstrap: [AppComponent],
})
export class AppModule { }