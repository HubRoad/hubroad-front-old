import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./authentication/login.component";
import {HomeComponent} from "./home.component";
import { AuthenticationGuard } from './authentication/authentication.guard';
import {LogoutComponent} from "./authentication/logout.component";
import {UserComponent} from "./user/user.component";
import {IsLoggedInGuard} from "./authentication/is-logged-in.guard";


const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthenticationGuard]
  },
  //404
  {
    path: '**',
    component: NoContentComponent
  }
];

export const app_routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, {useHash: true});

