import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { User } from './../user';


@Injectable()
export class UserService {

  constructor(private http: Http) { }
  
  registerorlogin(user: User){
    return this.http.post('/registerorlogin', user)
            .map(data => data.json())
            .toPromise();
  }
  
  get_logged_in_user(){
    return this.http.get('/get_logged_in_user')
            .map(data => data.json())
            .toPromise();
  }
  
  logoff(){
      this.http.get('/logoff')
  }
}
