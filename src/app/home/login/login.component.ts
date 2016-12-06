import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeService } from '../home.service';
import { SharedService } from '../../shared/shared.service';

import { ILogin } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: ILogin;
  
  constructor(private _router: Router, 
              private _homeService: HomeService,
              private _sharedService: SharedService) { 
    this.user = {
      username: "",
      password: ""   
    };
  }

  ngOnInit() { }

  goBack(): void{
    this._router.navigate(['/home']);
  }

  doLogin(form): void{
    console.log(form.value);
    console.log(this.user);
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
