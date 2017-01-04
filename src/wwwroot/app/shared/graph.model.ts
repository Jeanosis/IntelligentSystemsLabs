export class Graph {

    constructor(options: {
        values?: number[],
        step?: number
    } = {}) {
        this.values = options.values || [];
        this.step = options.step || 0;
    }

    values: number[];
    step: number;
}