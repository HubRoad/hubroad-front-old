import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {

  private  loggendIn = false;

  constructor(private http: Http) {
    this.loggendIn = !!localStorage.getItem('auth_token');
  }

  login(email: string, password: string): Promise<boolean> {
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');

    return this.http
      .get(`app/login/?email=${email}&password=${password}`)
      .toPromise()
      .then(res => {
        //TODO: change when API
        if (res.json().data.length == 1) {
          localStorage.setItem('auth_token', '1234');
          this.loggendIn = true;
          console.log('Logged In');
        }
        return this.loggendIn;
      })
      .catch(err => console.error(err));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggendIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggendIn;
  }
}
