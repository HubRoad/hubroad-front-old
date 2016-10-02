import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "./authentification.service";
import {Router} from "@angular/router";

@Component({
    selector: 'hr-logout',
  template: 'You are logged out.'
})
export class LogoutComponent implements OnInit {
    constructor(private userService: AuthentificationService, private router: Router) { }

    ngOnInit() {
      this.userService.logout();
      this.router.navigate(['']);
    }

}
