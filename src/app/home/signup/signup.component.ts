import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../home.service';
import { SharedService } from '../../shared/shared.service';

import { ISignUp } from './sign-up';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: ISignUp;
  
  constructor(private _router: Router, 
              private _homeService: HomeService,
              private _sharedService: SharedService) {
    this.user = {
      username: "",
      password: "",
      email: ""
    } 
  }

  ngOnInit() {
  }

  goBack(): void{
    this._router.navigate(['/home']);
  }

  doSignup(form): void{
    console.log(form.value);
    console.log(this.user);
    this._homeService.signUp().subscribe(
      data => {
        // set username for post login components use
        this._sharedService.setUserDetails(data['username']);

        // go to dashboard after successful signup
        this._router.navigate(['/polls']);
      },
      error => {
        console.log("Error in signup API request: " + error);
      }
    )
  }
}
