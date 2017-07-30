import { Component, OnInit } from '@angular/core';
import { User } from './../user'
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

  constructor(private pollservice: PollService, private router: Router) { }

  ngOnInit() {

  }

  


  get_logged_in_user(){  
    this.pollservice.get_logged_in_user()
      .then(data => {
        this.logged_in_user = data
      })
      .catch(err => console.log(err));
      this.router.navigate(["/login"])
  }
}
