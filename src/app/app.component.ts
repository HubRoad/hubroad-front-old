/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * AppComponent Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  url: string = ''
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial AppComponent State', this.appState.state);
  }

}
