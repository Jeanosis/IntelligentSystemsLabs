import { Injectable } from '@angular/core';

@Injectable()
export class SomeService {

    constructor() { }

    setProperty(value: number): void {
        this.property = value;
    }

    getProperty(): number {
        return this.property;
    }
    
    property: number = 0;
}