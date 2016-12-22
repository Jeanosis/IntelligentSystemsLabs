import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*import { PersonService, Person } from './person.service';*/

@Component({
    moduleId: module.id,
    selector: 'first-lab',
    templateUrl: './first-lab.component.html',
    styleUrls: ['./first-lab.component.css']/*,
    providers: [PersonService]*/
})

export class FirstLabComponent extends OnInit {

    constructor(private router: Router) {
        super();
    }

    ngOnInit(): void {
        console.log('First lab initiated!');
    }

    setAlert(): void {
        alert(JSON.stringify(this.router.routerState.root.url));
    }
}