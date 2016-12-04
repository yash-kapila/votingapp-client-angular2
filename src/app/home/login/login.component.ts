limport { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_username: string;
  login_password: string;
  res: any;

  constructor(private _router: Router, private _homeService: HomeService) { 
    this.login_username = "";
    this.login_password = "";
  }

  ngOnInit() {
  }

  goBack(): void{
    this._router.navigate(['/home']);
  }

  doLogin(): void{
    console.log("Username: " + this.login_username);
    console.log("Password: " + this.login_password);
    
    this._homeService.login().subscribe(
      success => this.res = success
    );
    // go to dashboard after successful login
    //this._router.navigate(['/polls', 'dashboard']);
  }
}
