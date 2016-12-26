import { RuleExpression } from './rule-expression.model';

export class Rule {
    constructor(options: {
        var_name?: string,
        class_name?: string,
        expr?: RuleExpression
    } = {}) {
        this.var_name = options.var_name || '';
        this.class_name = options.class_name || '';
        this.expr = options.expr || null;
    }

    var_name: string;
    class_name: string;
    expr: RuleExpression;
}