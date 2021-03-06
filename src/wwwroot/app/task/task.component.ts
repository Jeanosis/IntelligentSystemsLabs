import { Component, OnInit, OnDestroy, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { SyncService } from '../shared/sync/sync.service';
import { StorageService } from '../shared/storage.service';
import { Task } from '../shared/task.model';
import { Param } from '../shared/param.model';

@Component({
    moduleId: module.id,
    selector: 'task-panel',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
        private r:ActivatedRoute, 
        private syncService: SyncService,
        private storageService: StorageService,
        private renderer: Renderer) { }

    ngOnInit(): void {
        this.task = this.storageService.getTask();

        this.taskJson = JSON.stringify(this.task, null, 15);
        this.taskJson = this.taskJson.replace(/[\r\n]/g, '<br/>');
        this.taskJson = this.taskJson.replace(/[ ]/g, '&nbsp');

        this.syncService.setListener(this.renderer, (event: any) => {
            this.storageService.saveTask(this.task);
            
            this.taskJson = JSON.stringify(this.task, null, 15);
            this.taskJson = this.taskJson.replace(/[\r\n]/g, '<br/>');
            this.taskJson = this.taskJson.replace(/[ ]/g, '&nbsp');
        });
    }

    ngOnDestroy(): void {
        this.syncService.removeListener();
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