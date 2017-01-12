import { Component, OnInit, Input } from '@angular/core';

import { InputParamService } from '../../shared/input-param.service';
import { Param } from '../../shared/param.model';

@Component({
    moduleId: module.id,
    selector: 'task-input-p',
    templateUrl: 'task-input-params.component.html'
})
export class TaskInputParamsComponent extends OnInit {
    
    constructor(private inputParamService: InputParamService) {
        super();
    }

    ngOnInit(): void {
        this.inputParamService.loadData().then(data => {
            this.inputParams = data;
        });
    }

    inputParams: Param[] = [];
}