/**
 * Parameters of Class
 * 
 * @export
 * @class ClassParams
 */
export class ClassParams {
    /**
     * Creates an instance of ClassParams.
     * 
     * @param {{ a?: number, b?: number, c?: number, d?: number }} [options={}]
     * 
     * @memberOf ClassParams
     */
    constructor(options: {
        a?: number,
        b?: number,
        c?: number,
        d?: number,
        sigma?: number,
        a1?: number,
        a2?: number,
        c1?: number,
        c2?: number
    } = {}) {
        this.a = options.a || 0;
        this.b = options.b || 0;
        this.c = options.c || 0;
        this.d = options.d || 0;
        this.sigma = options.sigma || 0;
        this.a1 = options.a1 || 0;
        this.a2 = options.a2 || 0;
        this.c1 = options.c1 || 0;
        this.c2 = options.c2 || 0;
    }

    a: number;
    b: number;
    c: number;
    d: number;
    sigma: number;
    a1: number;
    a2: number;
    c1: number;
    c2: number;
}