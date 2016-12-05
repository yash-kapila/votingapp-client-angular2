import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../home.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup_username: string;
  signup_password: string;
  signup_email: string;
  
  constructor(private _router: Router, 
              private _homeService: HomeService,
              private _sharedService: SharedService) { 
    this.signup_email = "";
    this.signup_password = "";
    this.signup_username = "";
  }

  ngOnInit() {
  }

  goBack(): void{
    this._router.navigate(['/home']);
  }

  doSignup(): void{
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
