/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import { AppService } from './app.service';
import {UserHR} from "./UserHR";
import {UsersService} from "./users.service";
import {ApplicationHR} from "./dashboard/ApplicationHR";

//Used to call AdminLTE.layout.fix() in the OnInit
//Solve the screen onresize issue
declare var $: any;

/*
 * AppComponent Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: 'app.component.html',
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  user: UserHR = {id: 0, firstName: "A", lastName: "B", notificationsNumber: 4};
  users: UserHR[] = [];
  constructor(
    public appService: AppService, private usersService: UsersService) {
  }

  ngOnInit() {
    console.log('Initial AppComponent State', this.appService.state);
    setTimeout(() => {
      $.AdminLTE.layout.fix();
    });

    //TODO: remove when API
    //TODO: solve get User Problem
    //this.getUser();
    //this.test()
  }

  getUser(): void {
    this.usersService.getUsers()
      .then(users => this.users = users);
    console.log(this.users.length);
    //this.user = this.users[1];
  }

  applis: ApplicationHR[];
  test(): void {
    this.usersService.test()
      .then(t => this.applis = t);
    console.log("t: ", this.applis.length);
  }
}
