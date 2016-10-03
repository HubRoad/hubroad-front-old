import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {AuthenticationGuard} from "../../authentication/authentication.guard";
import {ListDashboardComponent} from "./list/list-dashboard.component";
import {CalendarDashboardComponent} from "./calendar/calendar-dashboard.component";
import {UserComponent} from "../user.component";

const DASHBOARD_ROUTES: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'list'
          },
          {
            path: 'list',
            component: ListDashboardComponent
          },
          {
            path: 'calendar',
            component: CalendarDashboardComponent
          }
        ]
      }
    ]
  }
];
export const dashboard_routing: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);
