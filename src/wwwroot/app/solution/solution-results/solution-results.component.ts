import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'solution-results',
    templateUrl: 'solution-results.component.html',
    styleUrls: ['solution-results.component.css']
})
export class SolutionResultsComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
        console.log('Solution Results Component initiated!');
    }
}