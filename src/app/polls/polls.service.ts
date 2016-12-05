import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PollsService {
  retrievePollsURL: string = "api/polls/retrievepolls.json"

  constructor(private _http: Http) { }

  submitPoll(): Observable<Response>{
    return;
  }

  retrievePolls(): Observable<Response>{
    return this._http.get(this.retrievePollsURL)
              .map((resp: Response) => resp.json());
  }
}
