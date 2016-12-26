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
    constructor(options: { a?: number, b?: number, c?: number, d?: number } = {}) {
        this.a = options.a;
        this.b = options.b;
        this.c = options.c;
        this.d = options.d;
    }

    a: number;
    b: number;
    c: number;
    d: number;
}