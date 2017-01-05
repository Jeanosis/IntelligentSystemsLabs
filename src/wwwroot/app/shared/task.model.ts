import { Param } from './param.model';
import { Rule } from './rule.model';

export class Task {
    constructor(options: {
        name?: string,
        in_vars?: Param[],
        out_vars?: Param[],
        rules?: Rule[]
    } = {}) {
        this.name = options.name || "";
        this.in_vars = options.in_vars || [];
        this.out_vars = options.out_vars || [];
        this.rules = options.rules || [];
    }

    name: string;
    in_vars: Param[];
    out_vars: Param[];
    rules: Rule[];
}