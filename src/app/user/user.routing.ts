import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoggedInGuard} from "../logged-in.guard";
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
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoggedInGuard]
      },
      {
        path: 'easyfill',
        component: EasyfillComponent,
        canActivate: [LoggedInGuard]
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]
  }

];

export const user_routing: ModuleWithProviders = RouterModule.forChild(USER_ROUTES);

