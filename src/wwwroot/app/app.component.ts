import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task.model';
import { Param } from './shared/param.model';
import { Class, ClassTypes } from './shared/class.model';
import { ClassParams } from './shared/class-params.model';
import { Rule } from './shared/rule.model';
import { RuleExpression, ExpressionTypes } from './shared/rule-expression.model';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']/*,
    providers: [
        PersonService
    ]*/
})

export class AppComponent extends OnInit {

    constructor() {
        super();
    }

    ngOnInit() {

    }
    /* Model's test
        let task: Task = new Task({
            name: "engine_pressure",
            in_vars: [
                new Param({
                    name: "temperature",
                    from: 0,
                    to: 175,
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

        console.log(task);
    }
    */
}
