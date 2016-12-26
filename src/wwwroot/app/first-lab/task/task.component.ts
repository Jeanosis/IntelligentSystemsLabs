import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { InputParamService } from '../../shared/input-param.service';

import { Task } from '../../shared/task.model';
import { Param } from '../../shared/param.model';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    host: { class: 'layer-shadow-3' },
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
    providers: [InputParamService]
})
export class TaskComponent extends OnInit {

    constructor(private inputParamService: InputParamService, private router: Router, private r:ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        var task = Cookie.get('task');
        this.task = task == null ? this.task : JSON.parse(task);
    }

    goToSolution(): void {
        this.router.navigate(['../solution'], { relativeTo: this.r });
    }

    addInputParam(): void {
        this.task.in_vars.push(new Param());
    }

    saveToCookies() {
        if (this.buttonState)
            return;

        this.buttonState = true;
        Cookie.set('task', JSON.stringify(this.task));
        setTimeout(() => {
            this.changeAnimationState();
        }, 2000);
    }

    changeAnimationState() {
        this.buttonState = !this.buttonState;
    }

    buttonState: boolean = false;
    task: Task = new Task();
}