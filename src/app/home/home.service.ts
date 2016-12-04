import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

  login(): Observable<Response> {
    console.log("inside home service");
    return this._http.get('/api/getpolldetails');
  }
}
