import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InputParamService } from '../../shared/input-param.service';
import { InputParam } from '../../shared/input-param.model';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    templateUrl: './task-panel.component.html',
    providers: [InputParamService]
})
export class TaskPanelComponent extends OnInit {

    constructor(private _inputParamService: InputParamService, private router: Router, private r:ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this._inputParamService.loadData().then(data => {
            this.inputParams = data;
        });
    }

    goToSolution(): void {
        this.router.navigate(['../solution'], { relativeTo: this.r });
    }

    inputParams: InputParam[] = [];
}