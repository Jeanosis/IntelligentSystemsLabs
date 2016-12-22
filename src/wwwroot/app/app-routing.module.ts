import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPanelComponent } from './task-panel/task-panel.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/lab1',
        pathMatch: 'full'
    },
    {
        path: '/lab1',
        component: FirstLabComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [FirstLabComponent];