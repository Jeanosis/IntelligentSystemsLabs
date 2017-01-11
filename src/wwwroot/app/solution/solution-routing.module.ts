import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionComponent } from './solution.component';

import { SolutionInputComponent } from './solution-input/solution-input.component';
import { SolutionResultsComponent } from './solution-results/solution-results.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionComponent,
    children: [
      {
        path: '',
        redirectTo: 'input',
        pathMatch: 'full'
      },
      {
        path: 'input',
        component: SolutionInputComponent
      },
      {
        path: 'results',
        component: SolutionResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }