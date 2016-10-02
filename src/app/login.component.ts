import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "./authentification.service";
import {Router} from "@angular/router";

@Component({
    selector: 'hr-login',
    template: `
    <div>
    <label>Email: </label> <input #email />
<label>Password: </label> <input #password />
<button (click)="onSubmit(email.value, password.value); email.value=''; password.value=''">Submit</button>
  <span>{{errorInfo}}</span>
  </div>`,
  providers: [AuthentificationService]
})
export class LoginComponent implements OnInit {
  constructor(private userService: AuthentificationService, private router: Router) { }

  errorInfo: string = "";

  onSubmit(email, password): void {

    if (email == "" || password == ""){
      this.errorInfo = "Fill every field";
      return;
    }

    this.userService.login(email, password)
      .then(result => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() { }



}