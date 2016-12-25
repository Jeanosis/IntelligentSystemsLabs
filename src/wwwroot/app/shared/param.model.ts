import { Class } from './class.model';
/*export interface InputParam {
    name: string;
    from: number;
    to: number;
}*/
export class Param {
    constructor(options: {
        name?: string,
        value?: number,
        from?: number,
        to?: number,
        classes?: Class[]
    } = {}) {
        this.name = options.name;
        this.value = options.value;
        this.from = options.from || 0;
        this.to = options.to || 100;
        this.classes = options.classes || [];
    }

    name: string;
    value: number;
    from: number;
    to: number;
    classes: Class[];
}