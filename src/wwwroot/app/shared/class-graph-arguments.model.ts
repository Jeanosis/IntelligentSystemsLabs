import { ClassTypes } from './class.model';
import { ClassParams } from './class-params.model';

export class ClassGraphArguments {
    constructor(options: {
        classType?: ClassTypes,
        from?: number,
        to?: number,
        step?: number,
        params?: ClassParams        
    } = {}) {
        this.classType = options.classType || 0;
        this.from = options.from || 0;
        this.to = options.to || 0;
        this.step = options.step || 0;
        this.params = options.params || new ClassParams();
    }

    classType: ClassTypes;
    from: number;
    to: number;
    step: number;
    params: ClassParams;
}