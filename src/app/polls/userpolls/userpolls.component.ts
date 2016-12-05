import { Component, OnInit, OnDestroy } from '@angular/core';

import { PollsService } from '../polls.service';

@Component({
  selector: 'app-userpolls',
  templateUrl: './userpolls.component.html',
  styleUrls: ['./userpolls.component.css']
})
export class UserpollsComponent implements OnInit {
  polls: Array<any[]>;

  constructor(private _pollsService: PollsService) { 
    this.polls = [];
  }

  ngOnInit() {
    // retrieve list of polls for the user
    this._pollsService.retrievePolls().subscribe(
      data => {
        this.polls = data['polls'];
      },
      error => {
        console.log("Error in retrievePolls API request " + error);
        this.polls = [];
      }
    );   
  }

  deletePoll(poll): void{
    console.log(JSON.stringify(poll));
  }

  ngOnDestroy() { }

}
