export class Graph {

    constructor(options: {
        values?: number[],
        from?: number,
        step?: number
    } = {}) {
        this.values = options.values || [];
        this.from = options.from || 0;
        this.step = options.step || 0;
    }

    values: number[];
    from: number;
    step: number;
}