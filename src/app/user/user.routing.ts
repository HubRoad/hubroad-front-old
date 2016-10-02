import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticationGuard} from "../authentication/authentication.guard";
import {EasyfillComponent} from "./easyfill/easyfill.component";
import {ModuleWithProviders} from "@angular/core";
import {UserComponent} from "./user.component";
import {ListDashboardComponent} from "./dashboard/list/list-dashboard.component";
import {CalendarDashboardComponent} from "./dashboard/calendar/calendar-dashboard.component";

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
      }
    ]
  }

];

export const user_routing: ModuleWithProviders = RouterModule.forChild(USER_ROUTES);

