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
    RouterModule.forChild([
      { path: 'dashboard', component: PollsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
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
