import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { PollComponent } from './poll/poll.component';
import { UserService } from './user/user.service'
import { PollService } from './poll/poll.service';
import { CreateComponent } from './poll/create/create.component';
import { PolldetailComponent } from './poll/polldetail/polldetail.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PollComponent,
    CreateComponent,
    PolldetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpModule
  ],
  providers: [UserService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
