import { Class } from './class.model';

/**
 * Parameter of Task
 * 
 * @export
 * @class Param
 */
export class Param {
    /**
     * Creates an instance of Param.
     * 
     * @param {{
     *         name?: string,
     *         value?: number,
     *         from?: number,
     *         to?: number,
     *         classes?: Class[]
     *     }} [options={}]
     * 
     * @memberOf Param
     */
    constructor(options: {
        name?: string,
        value?: number,
        from?: number,
        to?: number,
        classes?: Class[]
    } = {}) {
        this.name = options.name || '';
        this.value = options.value || 0;
        this.from = options.from || 0;
        this.to = options.to || 0;
        this.classes = options.classes || [];
    }

    name: string;
    value: number;
    from: number;
    to: number;
    classes: Class[];
}