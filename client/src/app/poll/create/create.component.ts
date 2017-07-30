import { Component, OnInit } from '@angular/core';
import { Poll } from './../../poll'
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  poll = new Poll
    
  constructor(private pollservice: PollService, private router: Router) { }

  ngOnInit() {
  }

  createpoll(poll: Poll){
    console.log(this.poll)
    this.pollservice.create_poll(this.poll)
    this.poll = new Poll
    this.router.navigate(["/dashboard"])
  }

}




