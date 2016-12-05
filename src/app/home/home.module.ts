import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PollsModule } from '../polls/polls.module';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
      FormsModule,
      PollsModule,
      RouterModule.forRoot([
          { path: 'home', component: HomeComponent },
          { path: 'home/login', component: LoginComponent },
          { path: 'home/signup', component: SignupComponent }
      ])
  ],
  providers: [ 
    HomeService  
  ]
})
export class HomeModule { }
