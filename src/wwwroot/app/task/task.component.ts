import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { InputParamService } from '../shared/input-param.service';
import { SyncService } from '../shared/sync/sync.service';
import { Task } from '../shared/task.model';
import { Param } from '../shared/param.model';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
/*host: { class: 'layer-shadow-3' },*/
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
    providers: [InputParamService]
})
export class TaskComponent extends OnInit {

    constructor(
        private inputParamService: InputParamService, 
        private router: Router,
        private r:ActivatedRoute, 
        private syncService: SyncService,
        private renderer: Renderer) {
        super();
    }

    ngOnInit(): void {
        var task = Cookie.get('task');
        this.task = task == null ? this.task : JSON.parse(task);

        this.taskJson = JSON.stringify(this.task, null, 15);
        this.taskJson = this.taskJson.replace(/[\r\n]/g, '<br/>');
        this.taskJson = this.taskJson.replace(/[ ]/g, '&nbsp');

        this.syncService.setListener(this.renderer, (event: any) => {
            Cookie.set('task', JSON.stringify(this.task));
        });
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
        //Cookie.set('task', JSON.stringify(this.task));
        setTimeout(() => {
            this.changeAnimationState();
            
            this.taskJson = JSON.stringify(this.task, null, 15);
            this.taskJson = this.taskJson.replace(/[\r\n]/g, '<br/>');
            this.taskJson = this.taskJson.replace(/[ ]/g, '&nbsp');
        }, 2000);
    }

    changeAnimationState() {
        this.buttonState = !this.buttonState;
    }

    taskJson: string = '';
    buttonState: boolean = false;
    task: Task = new Task();
}