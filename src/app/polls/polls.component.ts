import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  newPollView: boolean = true;
  
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  doLogout(): void{
    this._router.navigate(['/home']);
  }

}
