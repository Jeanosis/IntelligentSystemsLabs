import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'souliton-panel',
    templateUrl: './solution.component.html'
})
export class SolutionComponent extends OnInit {
    constructor(private router: Router) {
        super();
    }

    ngOnInit(): void {
        console.log('Solution Component initiated!');
    }

    goToLab(): void {
        this.router.navigate(['../']);
    }
}