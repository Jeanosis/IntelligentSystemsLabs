import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Param } from './param.model';

@Injectable()
export class InputParamService {

    constructor (private http: Http) { }

    loadData(): Promise<Param[]> {
        return this.http.get('/api/persons')
        .toPromise()
        .then(response => this.extractArray());
    }

    saveData() {
        console.log('data saved');
    }

    protected extractArray() {
        /*var param1: InputParam = {
            name: 'param 1',
            from: 1.2,
            to: 3.2
        };

        var param2: InputParam = {
            name: 'param 2',
            from: 0.5,
            to: 4.2
        };

        return [ param1, param2 ];*/
        return [
            new Param({ name: 'param 1', from: 0.5, to: 100 }),
            new Param({ name: 'param 2', from: 20, to: 35.3 })
        ];
    }
}