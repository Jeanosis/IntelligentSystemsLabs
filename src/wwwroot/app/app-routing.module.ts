import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';

/*import { TaskPanelComponent } from './task-panel/task-panel.component';*/

const routes: Routes = [
    /*{
        path: '',
        redirectTo: '/lab1',
        pathMatch: 'full'
    }/*,
    {
        path: '/lab1',
        component: FirstLabComponent
    }*/
    {
        path: 'help',
        component: HelpComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/*export const routedComponents = [FirstLabComponent];*/