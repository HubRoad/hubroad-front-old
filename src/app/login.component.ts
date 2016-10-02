import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
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
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

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
