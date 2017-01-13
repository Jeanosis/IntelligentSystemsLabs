import { Component, OnInit } from '@angular/core';
import { Section } from './section.model';

import { SomeService } from '../shared/some.service';

@Component({
    moduleId: module.id,
    selector: 'general',
    templateUrl: 'general.component.html',
    styleUrls: ['general.component.css']
})
export class GeneralComponent implements OnInit {
    constructor(private someService: SomeService) { }
    
    ngOnInit(): void {
        this.sections.push(new Section({ title: 'Task', description: 'Set up and edit a task.', url: 'task' }));
        this.sections.push(new Section({ title: 'Solution', description: 'Solve your task.', url: 'solution' }));
        this.sections.push(new Section({ title: 'Help', description: 'Task logic description and instructions.', url: 'help' }));

        console.log(this.someService.getProperty());
        this.someService.setProperty(3);
        console.log(this.someService.getProperty());
    }

    sections: Section[] = [];
}