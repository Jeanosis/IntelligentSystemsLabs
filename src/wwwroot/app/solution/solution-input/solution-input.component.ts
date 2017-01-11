import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'solution-input',
    templateUrl: 'solution-input.component.html',
    styleUrls: ['solution-input.component.css']
})
export class SolutionInputComponent extends OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
        console.log('Solution Input Component initiated!');
    }
}