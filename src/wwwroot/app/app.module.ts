import { NgModule, Renderer } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
/*import { APP_BASE_HREF } from '@angular/common';*/
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule, routes } from './app-routing.module';
//import { TaskModule } from './task/task.module';
import { AppToolbarModule } from './app-toolbar/app-toolbar.module';
import { GeneralModule } from './general/general.module';
import { SyncModule } from './shared/sync/sync.module';
import { SyncService } from './shared/sync/sync.service';

import { HelpModule } from './help/help.module';

import { AppComponent } from './app.component';
/*import { PersonService } from './person.service';*/

import { TaskService } from './shared/task.service';
import { StorageService } from './shared/storage.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        SyncModule.forRoot(),
        AppRoutingModule,
        AppToolbarModule,
        GeneralModule
    ],
    declarations: [AppComponent],
    providers: [
        TaskService,
        StorageService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }