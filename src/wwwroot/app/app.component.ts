import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Task } from './shared/task.model';
import { Param } from './shared/param.model';
import { Class, ClassTypes } from './shared/class.model';
import { ClassParams } from './shared/class-params.model';
import { Rule } from './shared/rule.model';
import { RuleExpression, ExpressionTypes } from './shared/rule-expression.model';
import { ClassGraphArguments } from './shared/class-graph-arguments.model';

import { TaskService } from './shared/task.service';
import { SyncService } from './shared/sync/sync.service';
import { StorageService } from './shared/storage.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild('syncButton') syncButton: ElementRef;

    constructor(
        private service: TaskService,
        private syncService: SyncService,
        private storageService: StorageService,
        private renderer: Renderer) { }

    ngOnInit() {
        // let task: Task = this.createTestTask();
        // console.log(task);

        // this.service
        //     .solveTask(task)
        //     .then(console.log)
        //     .catch(error =>
        //         console.log(`Server error: ${error}`));

        // let graphArguments: ClassGraphArguments = new ClassGraphArguments({
        //     classType: task.in_vars[0].classes[0].type,
        //     params: task.in_vars[0].classes[0].params,
        //     from: task.in_vars[0].from,
        //     to: task.in_vars[0].to,
        //     step: 0.5,
        // });
        // console.log(graphArguments);

        // this.service
        //     .buildClassGraph(graphArguments)
        //     .then(console.log)
        //     .catch(error => console.log(`Server error: ${error}`));;
        this.storageService.saveTask(this.createTestTask());
        this.syncService.setElement(this.syncButton);
    }

    enableSync(): void {
        this.buttonState = true;
        setTimeout(() => {
            this.changeAnimationState();
        }, 2000);
    }

    private createTestTask(): Task {
        return new Task({
            name: "engine_pressure",
            in_vars: [
                new Param({
                    name: "temperature",
                    from: 0,
                    to: 175,
                    value: 80,
                    classes: [
                        new Class({
                            name: "low",
                            type: ClassTypes.trapezoidal,
                            params: new ClassParams({
                                a: -1,
                                b: 0,
                                c: 50,
                                d: 100
                            })
                        }),
                        new Class({
                            name: "middle",
                            type: ClassTypes.trapezoidal,
                            params: new ClassParams({
                                a: 25,
                                b: 75,
                                c: 125,
                                d: 175
                            })
                        }),
                        new Class({
                            name: "high",
                            type: ClassTypes.trapezoidal,
                            params: new ClassParams({
                                a: 75,
                                b: 150,
                                c: 175,
                                d: 176
                            })
                        })
                        ]
                }),
                new Param({
                    name: "fuel_consumption",
                    from: 0,
                    to: 8,
                    value: 3.5,
                    classes: [
                        new Class({
                            name: "low",
                            type: ClassTypes.triangular,
                            params: new ClassParams({
                                a: 0,
                                b: 2,
                                c: 4
                            })
                        }),
                        new Class({
                            name: "middle",
                            type: ClassTypes.triangular,
                            params: new ClassParams({
                                a: 2,
                                b: 4,
                                c: 6
                            })
                        }),
                        new Class({
                            name: "high",
                            type: ClassTypes.triangular,
                            params: new ClassParams({
                                a: 4,
                                b: 6,
                                c: 8
                            })
                        })
                        ]
                })
            ],
            out_vars: [
                new Param({
                    name: "pressure",
                    from: 0,
                    to: 150,
                    classes: [
                        new Class({
                            name: "low",
                            type: ClassTypes.triangular,
                            params: new ClassParams({
                                a: -1,
                                b: 0,
                                c: 100
                            })
                        }),
                        new Class({
                            name: "middle",
                            type: ClassTypes.triangular,
                            params: new ClassParams({
                                a: 50,
                                b: 100,
                                c: 150
                            })
                        }),
                        new Class({
                            name: "high",
                            type: ClassTypes.triangular,
                            params: new ClassParams({
                                a: 100,
                                b: 150,
                                c: 151
                            })
                        })
                        ]
                })
            ],
            rules: [
                new Rule({
                    var_name: "pressure",
                    class_name: "low",
                    expr: new RuleExpression({
                        type: ExpressionTypes.and,
                        left: new RuleExpression({
                            type: ExpressionTypes.state,
                            var_name: "temperature",
                            class_name: "low"
                        }),
                        right: new RuleExpression({
                            type: ExpressionTypes.state,
                            var_name: "fuel_consumption",
                            class_name: "low"
                        })
                    })
                }),
                new Rule({
                    var_name: "pressure",
                    class_name: "middle",
                    expr: new RuleExpression({
                        type: ExpressionTypes.state,
                        var_name: "temperature",
                        class_name: "middle"
                    })
                }),
                new Rule({
                    var_name: "pressure",
                    class_name: "high",
                    expr: new RuleExpression({
                        type: ExpressionTypes.or,
                        left: new RuleExpression({
                            type: ExpressionTypes.state,
                            var_name: "temperature",
                            class_name: "high"
                        }),
                        right: new RuleExpression({
                            type: ExpressionTypes.state,
                            var_name: "fuel_consumption",
                            class_name: "high"
                        })
                    })
                })
            ]
        });
    }

    changeAnimationState(): void {
        this.buttonState = !this.buttonState;
    }

    buttonState: boolean = false;
}