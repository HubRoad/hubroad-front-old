/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import { AppService } from './app.service';
import {UserHR} from "./UserHR";

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
  providers: [AppService]
})
export class AppComponent implements OnInit {
  user: UserHR = {id: 0, firstName: "A", lastName: "B", notificationsNumber: 4};
  users: UserHR[];
  constructor(
    public appService: AppService) {

  }

  ngOnInit() {
    console.log('Initial AppComponent State', this.appService.state);
    setTimeout(() => {
      $.AdminLTE.layout.fix();
    });

    //TODO: remove when API
    //this.getUser();
  }

  getUser(): void {
    this.appService.getUsers()
      .then(users => this.users = users);

    this.user = this.users[1];
  }
}
