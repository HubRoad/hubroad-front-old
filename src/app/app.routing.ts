import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EasyfillComponent} from "./easyfill/easyfill.component";


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'easyfill', component: EasyfillComponent},
  { path: '**',    component: NoContentComponent },
];
