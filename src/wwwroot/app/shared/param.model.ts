/*export interface InputParam {
    name: string;
    from: number;
    to: number;
}*/
export class Param {
    constructor(options: { name?: string, from?: number, to?: number } = {}) {
        this.name = options.name;
        this.from = options.from || 0;
        this.to = options.to || 100;
    }

    name: string;
    from: number;
    to: number;
}