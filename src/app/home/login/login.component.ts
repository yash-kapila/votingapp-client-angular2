import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../home.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_username: string;
  login_password: string;
  

  constructor(private _router: Router, 
              private _homeService: HomeService,
              private _sharedService: SharedService) { 
    this.login_username = "";
    this.login_password = "";
  }

  ngOnInit() {
  }

  goBack(): void{
    this._router.navigate(['/home']);
  }

  doLogin(): void{
    this._homeService.login().subscribe(
      data => { 
        // set username for post login components use
        this._sharedService.setUserDetails(data['username']);

        // go to dashboard after successful login
        this._router.navigate(['/polls']); 
      },
      error => {
        console.log("Error in login API request: " + error);
      }
    );
  }
}
