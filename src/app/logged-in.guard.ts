import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserService) {}

  canActivate(): boolean {
    return this.user.isLoggedIn();
  }
}
