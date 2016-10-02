import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {AuthenticationGuard} from "../../authentication/authentication.guard";
import {ListDashboardComponent} from "./list/list-dashboard.component";
import {CalendarDashboardComponent} from "./calendar/calendar-dashboard.component";

const DASHBOARD_ROUTES: Routes = [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticationGuard],
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
    ];



export const dashboard_routing: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);
