import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';

import { Task } from '../shared/task.model';

@Component({
    moduleId: module.id,
    selector: 'souliton-panel',
    templateUrl: 'solution.component.html',
    styleUrls: ['solution.component.css']
})
export class SolutionComponent implements OnInit {

    constructor(private storageService: StorageService) { }

    ngOnInit(): void {
        this.task = this.storageService.getTask();
    }

    changeRoute(): void {
        this.rlaSafe = !this.rlaSafe;
    }

    private rlaSafe: boolean = true;
    private task: Task;
}