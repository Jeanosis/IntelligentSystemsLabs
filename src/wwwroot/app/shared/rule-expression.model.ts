export class RuleExpression {
    type: string;
    var_name: string;
    arg: RuleExpression;
    left: RuleExpression;
    right: RuleExpression;
}