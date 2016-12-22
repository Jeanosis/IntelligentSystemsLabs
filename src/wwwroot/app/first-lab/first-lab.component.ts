import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'first-lab',
    templateUrl: 'first-lab.component.html'
})

export class FirstLabComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit():void {
        console.log('first lab!');
    }
}