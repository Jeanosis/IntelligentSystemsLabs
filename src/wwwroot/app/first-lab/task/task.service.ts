import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Task } from '../../shared/task.model';
import { OneVariableSolution } from '../../shared/one-variable-solution.model';

@Injectable()
export class TaskService {

    constructor(private _http: Http) { }

    solveTask(task: Task): Promise<OneVariableSolution[]> {
        let headers = new Headers();
        headers.append("ContentType", "application/json");
        
        return this._http
            .post('/api/task/solve', task, { headers: headers })
            .toPromise()
            .then(response => response.json() || [])
            .catch(this.handlePromiseError);
    }

    protected handlePromiseError(error: any): Promise<void> {
        console.log("Handling a error...");

        // try {
        //     error = JSON.parse(error._body);
        // } catch(e) { }

        // console.log("Handling a error 2");

        // let errorMessage =
        //     error.errorMessage ? error.errorMessage
        //         : error.message ? error.message
        //             : error._body ? error._body
        //                 : error.status ? `${error.status} - ${error.statusText}`
        //                     : "Unknown server error";

        // console.log(`The error is: ${error.errorMessage}`);
        return Promise.reject(error);
    }
    
}