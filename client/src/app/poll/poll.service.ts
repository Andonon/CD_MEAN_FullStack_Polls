import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { User } from './../user';
import { Poll } from './../poll';

@Injectable()
export class PollService {

  constructor(private http: Http) { }

  get_curr_user(){
    return this.http.get('/get_curr_user')
            .map(data => data.json())
            .toPromise();
  }

  create_poll(poll: Poll){
    return this.http.post('/create_poll', poll)
            .map(data => data.json())
            .toPromise();
  }

  get_all_polls(){
    return this.http.get('/get_all_polls')
            .map(data => data.json())
            .toPromise();
  }
  
  get_one_poll(pollid){
    return this.http.get('/get_one_poll', pollid)
            .map(data => data.json())
            .toPromise();
  }

}
