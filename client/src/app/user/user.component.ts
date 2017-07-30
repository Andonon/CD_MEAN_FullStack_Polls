import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { UserService } from './user.service';
import { Router } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user = new User;
current_user: User
title = "My Surveys"

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.get_logged_in_user() // if user is logged in based on user session cookie, redirect to the dashboard. 
  }


  get_logged_in_user(){
    this.userservice.get_logged_in_user()
      .then(data => {
        if(data){
          this.router.navigate(["/dashboard"])
        }
      })
      .catch(err => {console.log(err)});
  }


  registerorlogin(){
  this.userservice.registerorlogin(this.user)
    .then(data => {
      if(data){
        this.router.navigate(["/dashboard"])
      } else {
        this.router.navigate(["/login"])
      }
    })
    .catch(err => console.log(err));
  }
}
