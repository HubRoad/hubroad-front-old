import {Injectable} from "@angular/core";
import {CanActivate, CanActivateChild, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(private user: AuthenticationService, private router: Router) {}

  canActivate() {
    if(this.user.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
  }

  canActivateChild() {
    return this.canActivate();
  }

}
