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

  constructor(private pollservice: PollService, private router: Router) {  
  }

  ngOnInit() {
  }

}
 
