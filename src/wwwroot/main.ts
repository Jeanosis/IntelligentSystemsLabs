import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { SyncService } from './app/shared/sync.service';

platformBrowserDynamic().bootstrapModule(AppModule/*, [SyncService]*/)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));