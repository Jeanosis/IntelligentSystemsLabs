import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
/*import { APP_BASE_HREF } from '@angular/common';*/
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FirstLabModule } from './first-lab/first-lab.module';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        FirstLabModule
    ],
    declarations: [AppComponent],
    providers: [
        PersonService/*,
        {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
        }*/
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }