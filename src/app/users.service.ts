import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UserHR} from "./UserHR";
import 'rxjs/add/operator/toPromise';
import {ApplicationHR} from "./dashboard/ApplicationHR";


@Injectable()
export class UsersService {

  private usersAPIUrl = "app/api_users";

  constructor(private http: Http) { }

  getUsers(): Promise<UserHR[]> {
    console.log("getUsers");
    return this.http.get(this.usersAPIUrl)
      .toPromise()
      .then(resp => resp.json().data as UserHR[])
      .catch(this.handleError);
  }

  test(): Promise<ApplicationHR[]> {
    return this.http.get("app/api_applications")
      .toPromise()
      .then(resp => resp.json().data as ApplicationHR[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
