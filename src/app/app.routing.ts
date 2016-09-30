import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EasyfillComponent} from "./easyfill/easyfill.component";
import {ModuleWithProviders} from "@angular/core";


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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

