import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'


import { Emp } from './emp';
import { Observable }     from 'rxjs/Observable';

 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';

@Injectable()
export class EmpService {

    private _apiURL = "/api/getEmployees";

    constructor(private http: Http) {   }

    getEmployees(): Observable<Emp[]> {

        return this.http.get(this._apiURL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {

       
        let body = res.json();
      console.log(body);
        return body || [];
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}