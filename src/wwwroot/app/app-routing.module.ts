import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
/*import { TaskPanelComponent } from './task-panel/task-panel.component';*/

const routes: Routes = [
    {
        path: '',
        component: GeneralComponent
    },
    {
        path: 'lab1',
        loadChildren: 'app/first-lab/first-lab.module#FirstLabModule'
    },
    {
        path: 'solution',
        loadChildren: 'app/solution/solution.module#SolutionModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/*export const routedComponents = [FirstLabComponent];*/