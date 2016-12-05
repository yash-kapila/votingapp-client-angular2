import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private username: Subject<string> = new Subject<string>();
    
  constructor() { }

  // set properties
  setUserDetails(username): void {
    this.username.next(username);
  };

  // subscribes and listens to a property
  getUserDetails(): Observable<string> {
    return this.username.asObservable();
  };

}
