import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InputParamService } from '../../shared/input-param.service';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    templateUrl: './task.component.html',
    providers: [InputParamService]
})
export class TaskComponent extends OnInit {

    constructor(private _inputParamService: InputParamService, private router: Router, private r:ActivatedRoute) {
        super();
    }

    ngOnInit(): void {

    }

    goToSolution(): void {
        this.router.navigate(['../solution'], { relativeTo: this.r });
    }
}