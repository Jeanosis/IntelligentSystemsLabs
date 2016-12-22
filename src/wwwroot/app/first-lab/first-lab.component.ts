import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*import { PersonService, Person } from './person.service';*/

@Component({
    moduleId: module.id,
    selector: 'first-lab',
    templateUrl: 'first-lab.component.html'/*,
    providers: [PersonService]*/
})

export class FirstLabComponent { }/*extends OnInit {

    constructor(private _service: PersonService) {
        super();
    }

    ngOnInit() {
        this._service.loadData().then(data => {
            this.persons = data;
        });
    }

    persons: Person[] = [];
}*/