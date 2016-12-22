import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskPanelComponent } from './task-panel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'task', component: TaskPanelComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TaskPanelRoutingModule { }