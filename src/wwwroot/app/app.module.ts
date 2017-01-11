import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
/*import { APP_BASE_HREF } from '@angular/common';*/
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FirstLabModule } from './first-lab/first-lab.module';
import { AppToolbarModule } from './app-toolbar/app-toolbar.module';
import { GeneralModule } from './general/general.module';

import { AppComponent } from './app.component';
/*import { PersonService } from './person.service';*/

import { TaskService } from './first-lab/task/task.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        FirstLabModule,
        AppToolbarModule,
        GeneralModule
    ],
    declarations: [AppComponent],
    providers: [
        TaskService
        // {
        //     provide: APP_BASE_HREF,
        //     useValue: '<%= APP_BASE %>'
        // }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }