import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
];
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/lab1',
//     pathMatch: 'full'
//   },
//   {
//     path: 'input-params',
//     loadChildren: 'app/first-lab/task/task-input-param/task-input-param.module#TaskInputParamModule'
//   },
//   {
//     path: 'input-params',
//     loadChildren: 'app/first-lab/task/task-input-param/task-input-param.module#TaskInputParamModule'
//   }
// ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }