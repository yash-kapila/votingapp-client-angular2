import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PollsComponent } from './polls.component';
import { NewpollComponent } from './newpoll/newpoll.component';
import { UserpollsComponent } from './userpolls/userpolls.component';

import { PollsService } from './polls.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'polls/dashboard', component: PollsComponent }
    ])
  ],
  declarations: [
    PollsComponent,
    NewpollComponent,
    UserpollsComponent
  ],
  providers: [
    PollsService
  ]
})
export class PollsModule { }
