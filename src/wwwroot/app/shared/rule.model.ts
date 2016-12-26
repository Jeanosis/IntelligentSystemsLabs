import { Class } from './class.model';
import { RuleExpression } from './rule-expression.model';

export class Rule {
    var_name: string;
    class: Class;
    expression: RuleExpression;
}