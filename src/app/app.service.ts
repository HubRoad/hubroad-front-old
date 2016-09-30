import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UserHR} from "./UserHR";
import 'rxjs/add/operator/toPromise';

export type InteralStateType = {
  [key: string]: any
};

@Injectable()
export class AppService {
  _state: InteralStateType = { };

  private usersAPIUrl = "app/api_users";

  constructor(private http: Http) { }

  getUsers(): Promise<UserHR[]> {
    return this.http.get(this.usersAPIUrl)
      .toPromise()
      .then(resp => resp.json().data as UserHR[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }


  private _clone(object: InteralStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
