import { ClassParams } from './class-params.model';

export enum ClassTypes {
    triangular = 0,
    trapezoidal,
    gaussian,
    generalised_bell,
    sigmoid_diff
}

/**
 * Class of Input/Output parameters.
 * 
 * @export
 * @class Class
 */
export class Class {
    /**
     * Creates an instance of Class.
     * 
     * @param {{ name?: string, type?: string, params?: ClassParams }} [options={}]
     * 
     * @memberOf Class
     */
    constructor(options: { name?: string, type?: ClassTypes, params?: ClassParams } = {}) {
        this.name = options.name || '';
        this.type = options.type || null;
        this.params = options.params || new ClassParams();
    }

    name: string;
    type: ClassTypes;
    params: ClassParams;
}