import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service'
import { Poll } from './../../poll'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-polldetail',
  templateUrl: './polldetail.component.html',
  styleUrls: ['./polldetail.component.css']
})
export class PolldetailComponent implements OnInit {

  poll_id = params._id
  current_poll = Poll;

  constructor(private pollservice: PollService, private router: Router, private route: ActivatedRoute) { 
     this.route.params.subscribe((param)=>{
      this.poll_id = param.id
    })
  }

  ngOnInit() {
  
  this.get_poll_detail()
  }

  get_poll_detail(poll_id){
    this.pollservice.get_one_poll(this.poll_id)
      .then(data => {
        this.current_poll = data
      })
  }

}
