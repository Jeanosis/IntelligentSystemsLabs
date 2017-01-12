import { Component, OnInit, Input } from '@angular/core';

import { Class, ClassTypes } from '../../../shared/class.model';

@Component({
    moduleId: module.id,
    selector: 'task-class',
    host: { class: 'panel' },
    templateUrl: 'task-class.component.html'
})
export class TaskClassComponent extends OnInit {
    
    constructor() {
        super();
    }

    ngOnInit(): void {
        //
    }

    classTypes: any[] = [
        { name: 'Triangular', value: ClassTypes.triangular },
        { name: 'Trapezoidal', value: ClassTypes.trapezoidal },
        { name: 'Gaussian', value: ClassTypes.gaussian },
        { name: 'Generalised bell', value: ClassTypes.generalised_bell },
        { name: 'Sigmoid diff', value: ClassTypes.sigmoid_diff }
    ];

    @Input() index: number = 0;
    @Input('class') taskClass: Class = new Class();
}