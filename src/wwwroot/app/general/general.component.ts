import { Component, OnInit } from '@angular/core';
import { Section } from './section.model';

@Component({
    moduleId: module.id,
    selector: 'general',
    templateUrl: 'general.component.html',
    styleUrls: ['general.component.css']
})
export class GeneralComponent implements OnInit {
    constructor() { }

    ngOnInit():void {
        this.sections.push(new Section({ title: 'Task', description: 'Set up and edit a task.', url: 'task' }));
        this.sections.push(new Section({ title: 'Solution', description: 'Solve your task.', url: 'solution' }));
        this.sections.push(new Section({ title: 'Help', description: 'Task logic description and instructions.', url: 'help' }));
    }

    sections: Section[] = [];
}