import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PersonService, Person } from './person.service';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    templateUrl: './task-panel.component.html',
    providers: [PersonService]
})
export class TaskPanelComponent extends OnInit {

    constructor(private _service: PersonService, private router: Router, private r:ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this._service.loadData().then(data => {
            this.persons = data;
        });
    }

    goToSolution(): void {
        this.router.navigate(['../solution'], { relativeTo: this.r });
    }

    persons: Person[] = [];
}