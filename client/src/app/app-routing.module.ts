import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component'
import { PollComponent } from './poll/poll.component'
import { CreateComponent } from './poll/create/create.component'
import { PolldetailComponent } from './poll/polldetail/polldetail.component'

const routes: Routes = [
    { path: "login", component: UserComponent },
    { path: "dashboard", component: PollComponent },
    { path: "", pathMatch: "full", redirectTo: "/login"},
    { path: "create", component: CreateComponent },
    { path: 'poll/:id', component: PolldetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
