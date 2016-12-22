import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLabComponent } from './first-lab.component';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { SolutionPanelComponent } from './solution-panel/solution-panel.component';

const routes: Routes = [
  {
    path: 'lab1',
    component: FirstLabComponent,
    children: [
      {
        path: '',
        redirectTo: '/lab1/task',
        pathMatch: 'full'
      },
      {
        path: 'task',
        component: TaskPanelComponent
      },
      {
        path: 'solution',
        component: SolutionPanelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLabRoutingModule { }