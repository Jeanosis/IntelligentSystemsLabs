import { Component, OnInit, OnDestroy, Input, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskService } from '../../shared/task.service';
import { SyncService } from '../../shared/sync/sync.service';
import { StorageService } from '../../shared/storage.service';

import { Task } from '../../shared/task.model';
import { Param } from '../../shared/param.model';
import { Class, ClassTypes } from '../../shared/class.model';
import { ClassParams } from '../../shared/class-params.model';
import { RuleExpression, ExpressionTypes } from '../../shared/rule-expression.model';
import { Rule } from '../../shared/rule.model';

@Component({
    moduleId: module.id,
    selector: 'solution-input',
    templateUrl: 'solution-input.component.html',
    styleUrls: ['solution-input.component.css']
})
export class SolutionInputComponent implements OnInit, OnDestroy {
    constructor(
        private storageService: StorageService,
        private syncService: SyncService,
        private taskService: TaskService,
        private renderer: Renderer,
        private router: Router,
        private r:ActivatedRoute ) { }

    ngOnInit(): void {
        this.task = this.storageService.getTask();

        this.syncService.setListener(this.renderer, (event: any) => {
            console.log('Done');
            this.storageService.saveTask(this.task);

            //var task = this.createTestTask();
            this.taskService.solveTask(this.task).then(data => {
                this.storageService.saveResults(data);
                this.router.navigate(['../results'], { relativeTo: this.r });
            }).catch(error => {
                console.log(`Server error: ${error}`)
            });
        });
    }
    
    ngOnDestroy(): void {
        this.syncService.removeListener();
    }

    private task: Task;
}