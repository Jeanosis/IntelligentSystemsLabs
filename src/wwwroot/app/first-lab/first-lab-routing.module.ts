import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstLabComponent } from './first-lab.component';
import { TaskPanelComponent } from './task-panel/task-panel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'lab1',
        component: FirstLabComponent,
        children: [
          /*{ path: '', component: CrisisListComponent, index: true },*/
          { path: 'task', component: TaskPanelComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class FirstLabRoutingModule { }