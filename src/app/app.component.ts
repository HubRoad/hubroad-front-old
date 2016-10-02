/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import { AppService } from './app.service';
import {UserHR} from "./user/UserHR";
import {ApplicationHR} from "./user/dashboard/ApplicationHR";

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
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  user: UserHR = {id: 0, firstName: "A", lastName: "B", notificationsNumber: 4};
  users: UserHR[] = [];
  constructor(
    public appService: AppService) {
  }

  ngOnInit() {
    console.log('Initial AppComponent State', this.appService.state);
    setTimeout(() => {
      $.AdminLTE.layout.fix();
    });
  }
}
