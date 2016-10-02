import {Injectable} from "@angular/core";
import {CanActivate, CanActivateChild} from "@angular/router";
import {AuthentificationService} from "./authentification.service";

@Injectable()
export class LoggedInGuard implements CanActivate, CanActivateChild {
  constructor(private user: AuthentificationService) {}

  canActivate(): boolean {
    return this.user.isLoggedIn();
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
