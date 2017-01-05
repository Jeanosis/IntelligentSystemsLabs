export enum ExpressionTypes {
    neg = 0,
    state,
    and,
    or
}

export class RuleExpression {
    constructor(options: {
        type?: ExpressionTypes,
        var_name?: string,
        class_name?: string,
        arg?: RuleExpression,
        left?: RuleExpression,
        right?: RuleExpression        
    } = {}) {
        this.type = options.type || 0;
        this.var_name = options.var_name || "";
        this.class_name = options.class_name || "";
        
        // Adding || new RuleExpression() to the assignments below
        // would lead to infinite recursion.
        this.arg = options.arg;
        this.left = options.left;
        this.right = options.right;
    }

    type: ExpressionTypes;
    var_name: string;
    class_name: string;
    arg: RuleExpression;
    left: RuleExpression;
    right: RuleExpression;
}