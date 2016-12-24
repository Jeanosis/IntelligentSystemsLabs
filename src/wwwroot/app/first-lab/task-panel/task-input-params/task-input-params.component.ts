import { Component, OnInit } from '@angular/core';

import { InputParamService } from '../../../shared/input-param.service';
import { InputParam } from '../../../shared/input-param.model';

@Component({
    moduleId: module.id,
    selector: 'task-input',
    templateUrl: 'task-input-params.component.html'
})
export class TaskInputParamsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}