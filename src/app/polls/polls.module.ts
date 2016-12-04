import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PollsComponent } from './polls.component';
import { NewpollComponent } from './newpoll/newpoll.component';
import { UserpollsComponent } from './userpolls/userpolls.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'polls/dashboard', component: PollsComponent }
    ])
  ],
  declarations: [
    PollsComponent,
    NewpollComponent,
    UserpollsComponent
  ]
})
export class PollsModule { }
