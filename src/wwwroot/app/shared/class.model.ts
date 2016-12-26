import { ClassParams } from './class-params.model';

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
    constructor(options: { name?: string, type?: string, params?: ClassParams } = {}) {
        this.name = options.name || '';
        this.type = options.type || '';
        this.params = options.params || new ClassParams();
    }

    name: string;
    type: string;//"trapezoidal"
    params: ClassParams;
}