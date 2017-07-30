import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { User } from './../user';
import { Poll } from './../poll';

@Injectable()
export class PollService {

  constructor(private http: Http) { }

  get_logged_in_user(){
    return this.http.get('/get_logged_in_user')
            .map(data => data.json())
            .toPromise();
  }

  create_poll(poll: Poll){
    return this.http.post('/create_poll', poll)
            .map(data => data.json())
            .toPromise();
  }


}
