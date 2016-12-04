import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup_username: string;
  signup_password: string;
  signup_email: string;
  
  constructor(private _router: Router) { 
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
    console.log("Username: " + this.signup_username);
    console.log("Email: " + this.signup_email);
    console.log("Password: " + this.signup_password);

    // go to dashboard after successful signup
    this._router.navigate(['/polls', 'dashboard']);
  }

}
