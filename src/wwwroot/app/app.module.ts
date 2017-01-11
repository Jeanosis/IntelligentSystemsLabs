import { NgModule, Renderer } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
/*import { APP_BASE_HREF } from '@angular/common';*/
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule, routes } from './app-routing.module';
//import { FirstLabModule } from './first-lab/first-lab.module';
import { AppToolbarModule } from './app-toolbar/app-toolbar.module';
import { GeneralModule } from './general/general.module';
import { SyncModule } from './shared/sync/sync.module';

import { AppComponent } from './app.component';
/*import { PersonService } from './person.service';*/

import { TaskService } from './task/task.service';
import { StorageService } from './shared/storage.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        //FirstLabModule,
        SyncModule.forRoot(),
        AppToolbarModule,
        GeneralModule
    ],
    declarations: [AppComponent],
    providers: [
        TaskService,
        StorageService
        // {
        //     provide: APP_BASE_HREF,
        //     useValue: '<%= APP_BASE %>'
        // }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }