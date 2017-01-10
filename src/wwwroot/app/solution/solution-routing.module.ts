import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SolutionComponent } from './solution.component';
import { SolutionInputPanelComponent } from './solution-input/solution-input.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full',
    children: [
        {
            path: 'input',
            component: SolutionInputPanelComponent
        },
        {
            path: 'results',
            loadChildren: 'app/solution/solution-results/solution-results.module#SolutionResultsModule'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLabRoutingModule { }