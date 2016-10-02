import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate() {
    if (!this.authService.isLoggedIn()){
      return true;
    }
    this.router.navigate(['/user'])
  }
}
