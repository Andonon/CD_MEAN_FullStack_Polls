import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component'
import { PollComponent } from './poll/poll.component'

const routes: Routes = [
    { path: "login", component: UserComponent },
    { path: "dashboard", component: PollComponent },
    { path: "", pathMatch: "full", redirectTo: "/login"},
    // { path: 'user/:id', component: BucketlistuserdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
