import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { Poll } from './../poll'
import { PollService } from './poll.service';
import { Router } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  
  logged_in_user: User
  current_polls: Array<Poll>

  constructor(private pollservice: PollService, private router: Router) {  
  }

  ngOnInit() {
    this.get_all_polls();
    this.get_curr_user();
  }

  get_curr_user(){ 
    this.pollservice.get_curr_user()
    .then(userdata => {
        this.logged_in_user = userdata;
    })
  }

  get_all_polls(){
    this.pollservice.get_all_polls()
      .then(polldata => {
        this.current_polls = polldata;
        console.log(this.current_polls)
      })
  }

}
 
