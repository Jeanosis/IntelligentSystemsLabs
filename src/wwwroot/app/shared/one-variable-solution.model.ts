import { Graph } from './graph.model';

export class OneVariableSolution {

    constructor(options: {
        name?: string,
        graph?: Graph,
        gravity_center?: number
    } = {}) {
        this.name = options.name || "";
        this.graph = options.graph || new Graph();
        this.gravity_center = options.gravity_center || 0;
    }

    name: string;
    graph: Graph;
    gravity_center: number;
}