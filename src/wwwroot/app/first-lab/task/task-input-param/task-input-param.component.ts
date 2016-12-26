import { Component, OnInit, Input } from '@angular/core';

import { Param } from '../../../shared/param.model';
import { Class } from '../../../shared/class.model';

@Component({
    moduleId: module.id,
    selector: 'task-input',
    templateUrl: 'task-input-param.component.html'
})
export class TaskInputParamComponent extends OnInit {
    
    constructor() {
        super();
    }

    ngOnInit(): void {
        //
    }

    addTaskClass(): void {
        this.inputParam.classes.push(new Class());
    }

    @Input() index: number = 0;
    @Input('param') inputParam: Param = new Param();
}