import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'login.component.html',
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  constructor(private userService: AuthenticationService, private router: Router) { }

  errorInfo: string = "";

  onSubmit(email, password): void {

    if (email == "" || password == ""){
      this.errorInfo = "Fill every field";
      return;
    }

    this.userService.login(email, password)
      .then(() => {
        //TODO: modify when API
        console.log('OK');
        this.router.navigate(['/user']);
        location.reload(); //Better solution?
    });

    this.router.navigate(['/user']);

  }

  ngOnInit() { }



}
