import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../shared/shared.service';

@Component({
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  newPollView: boolean = true;
  private subscribe: any;

  constructor(private _router: Router,
              private _sharedService: SharedService) { }

  ngOnInit() {
    // subscribe to SharedService property to listen for changes
    this.subscribe = this._sharedService.getUserDetails().subscribe(
      (username) => {
        console.log("Listening to shared service from poll.component: " + username);
      }
    );
  }

  doLogout(): void{
    this._router.navigate(['/home']);
  }

  ngOnDestroy() { }

}
