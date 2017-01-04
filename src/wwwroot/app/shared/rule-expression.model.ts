export enum ExpressionTypes {
    neg = 1,
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
        this.type = options.type || null;
        this.var_name = options.var_name || '';
        this.class_name = options.class_name || '';
        this.arg = options.arg || null;
        this.left = options.left || null;
        this.right = options.right || null;
    }

    type: ExpressionTypes;
    var_name: string;
    class_name: string;
    arg: RuleExpression;
    left: RuleExpression;
    right: RuleExpression;
}