import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticationGuard} from "../authentication/authentication.guard";
import {EasyfillComponent} from "./easyfill/easyfill.component";
import {ModuleWithProviders} from "@angular/core";
import {UserComponent} from "./user.component";
import {TestComponent} from "./test.component";

const USER_ROUTES: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'easyfill',
        component: EasyfillComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]
  }

];

export const user_routing: ModuleWithProviders = RouterModule.forChild(USER_ROUTES);

