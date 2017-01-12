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
        var task = Cookie.get(this.taskName);
        return task === null ? new Task() : JSON.parse(task);
    }

    saveTask(task: Task): void {
        Cookie.set(this.taskName, JSON.stringify(task));
    }

    saveResults(results: Object[]): void {
        Cookie.set(this.resultName, JSON.stringify(results));
    }

    getResults(): Object[] {
        var results = Cookie.get(this.resultName);
        return results === null ? [] : JSON.parse(results);
    }

    private taskName: string = 'task';
    private resultName: string = 'results';
}