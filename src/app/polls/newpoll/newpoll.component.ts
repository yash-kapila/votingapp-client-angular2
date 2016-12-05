import { Component, OnInit } from '@angular/core';

import { IPollOptions } from './poll-options';

@Component({
  selector: 'app-newpoll',
  templateUrl: './newpoll.component.html',
  styleUrls: ['./newpoll.component.css']
})
export class NewpollComponent implements OnInit {
  options: Array<IPollOptions> = [];

  constructor() {
    this.options = [
      {
        'id': 1,
        'value': ''
      }
    ] 
  }

  ngOnInit() {
  }

  addMoreOptions(): void{
    let lastOption = this.options[this.options.length - 1];
    
    this.options.push({
      id: ++lastOption.id,
      value: ''
    })
  }

  submitPoll(): void{
    console.log(this.options);

    //send poll details to server
  }

}
