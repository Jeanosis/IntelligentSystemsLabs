import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstLabComponent } from './first-lab.component';
//import { TaskComponent } from './task/task.component';
//import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  {
    path: '',
    component: FirstLabComponent,
    children: [
      /*{
        path: '',
        redirectTo: '/lab1/task',
        pathMatch: 'full'
      },*/
      {
        path: 'task',
        //component: TaskComponent
        loadChildren: 'app/first-lab/task/task.module#TaskModule'
  }/*,
      {
        path: 'solution',
        component: SolutionComponent
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLabRoutingModule { }