import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';
import {DashboardComponent} from "./user/dashboard/dashboard.component";
import {EasyfillComponent} from "./user/easyfill/easyfill.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login.component";
import {HomeComponent} from "./home.component";
import { LoggedInGuard } from './logged-in.guard';
import {LogoutComponent} from "./logout.component";
import {UserComponent} from "./user/user.component";


const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [LoggedInGuard]
  }
];

export const app_routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, {useHash: true});

