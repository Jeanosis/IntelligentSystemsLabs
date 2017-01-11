import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { Task } from './task.model';
import { Param } from './param.model';

@Injectable()
export class StorageService {

    constructor() { }

    getInputParams(): Param[] {
        var task = JSON.parse(Cookie.get(this.taskName));
        
        return task === null ? [] : task.in_vars;
    }

    setInputParams(inputParams: Param[]): void {
        var task = JSON.parse(Cookie.get(this.taskName));
        task.in_vars = inputParams;
        Cookie.set(this.taskName, JSON.stringify(task));
    }

    getTask(): Task {
        var task = JSON.parse(Cookie.get(this.taskName));
        return task === null ? new Task() : task;
    }

    saveTask(task: Task): void {
        Cookie.set(this.taskName, JSON.stringify(task));
    }

    private taskName: string = 'task';
}