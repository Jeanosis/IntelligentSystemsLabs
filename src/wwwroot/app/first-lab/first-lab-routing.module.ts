import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstLabComponent } from './first-lab.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'lab1', component: FirstLabComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FirstLabRoutingModule { }