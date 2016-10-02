import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'hr-logout',
  template: 'You are logged out.'
})
export class LogoutComponent implements OnInit {
    constructor(private userService: AuthenticationService, private router: Router) { }

    ngOnInit() {
      this.userService.logout();
      this.router.navigate(['']);
    }

}
