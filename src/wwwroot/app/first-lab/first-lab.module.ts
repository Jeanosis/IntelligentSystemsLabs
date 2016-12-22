import { NgModule } from '@angular/core';
import { FirstLabRoutingModule } from './first-lab-routing.module';

import { FirstLabComponent }   from './first-lab.component';

@NgModule({
    imports: [FirstLabRoutingModule],
    exports: [FirstLabComponent],
    declarations: [FirstLabComponent]
})
export class FirstLabModule { }
