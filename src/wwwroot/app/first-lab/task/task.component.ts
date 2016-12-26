import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { InputParamService } from '../../shared/input-param.service';

import { Task } from '../../shared/task.model';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    templateUrl: './task.component.html',
    providers: [InputParamService]
})
export class TaskComponent extends OnInit {

    constructor(private inputParamService: InputParamService, private router: Router, private r:ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this.task = new Task();
        this.task.name = 'lol';
        Cookie.set('task', JSON.stringify(this.task));
        console.log(Cookie.get('task1'));
        var task2 = JSON.parse(Cookie.get('task1'));
        console.log('after cookies', JSON.stringify(task2));
    }

    goToSolution(): void {
        this.router.navigate(['../solution'], { relativeTo: this.r });
    }

    saveToCookies(event: any) {
        
        this.changeAnimationState();
    }

    changeAnimationState() {
        this.buttonState = !this.buttonState;
    }

    buttonState: boolean = false;
    task: Task;
}