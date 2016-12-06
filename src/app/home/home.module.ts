import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
      CommonModule,
      RouterModule.forChild([
          { path: 'home', component: HomeComponent },
          { path: 'home/login', component: LoginComponent },
          { path: 'home/signup', component: SignupComponent },
          { path: 'polls', loadChildren: 'app/polls/polls.module#PollsModule'}
      ])
  ],
  providers: [ 
    HomeService  
  ]
})
export class HomeModule { }
