import {Injectable} from "@angular/core";
import {CanActivate, CanActivateChild, Router} from "@angular/router";
import {AuthentificationService} from "./authentification.service";

@Injectable()
export class LoggedInGuard implements CanActivate, CanActivateChild {
  constructor(private user: AuthentificationService, private router: Router) {}

  canActivate() {
    if(this.user.isLoggedIn())
      return true;
    this.router.navigate(['']);
  }

  canActivateChild() {
    return this.canActivate();
  }
}
