import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from './person.service';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    templateUrl: './task-panel.component.html',
    providers: [PersonService]
})
export class TaskPanelComponent extends OnInit {

    constructor(private _service: PersonService) {
        super();
    }

    ngOnInit() {
        this._service.loadData().then(data => {
            this.persons = data;
        });
    }

    persons: Person[] = [];
}