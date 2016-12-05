import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  loginURL = "api/home/login.json";
  signupURL = "api/home/signup.json";

  constructor(private _http: Http) { }

  login(): Observable<Response> {
    return this._http.get(this.loginURL)
              .map((resp: Response) => resp.json());
  }

  signUp(): Observable<Response> {
    return this._http.get(this.signupURL)
              .map((resp: Response) => resp.json());
  }
}
