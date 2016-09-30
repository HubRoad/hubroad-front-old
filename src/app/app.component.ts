/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import { AppState } from './app.service';

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
  url: string = ''
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial AppComponent State', this.appState.state);
    setTimeout(() => {
      $.AdminLTE.layout.fix();
    });
  }


}
