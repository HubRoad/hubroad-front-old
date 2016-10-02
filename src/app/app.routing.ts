import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EasyfillComponent} from "./easyfill/easyfill.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login.component";
import {HomeComponent} from "./home.component";
import { LoggedInGuard } from './logged-in.guard';
import {LogoutComponent} from "./logout.component";


export const ROUTES: Routes = [
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
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'easyfill',
    component: EasyfillComponent
  },
  //Error 404: no content
  {
    path: '**',
    component: NoContentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, {useHash: true});

