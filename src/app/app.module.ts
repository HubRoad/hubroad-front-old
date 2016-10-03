/* Import Modules */
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './user/shared/shared.module';

import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/* Import Components */
import { AppComponent } from './app.component';
import { NoContentComponent } from "./no-content/no-content.component";

/*
 * Platform and Environment providers/directives/pipes
 */
import { app_routing } from './app.routing';

import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppService, InteralStateType } from './app.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {AuthenticationService} from "./authentication/authentication.service";
import {AuthenticationGuard} from "./authentication/authentication.guard";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./authentication/login.component";
import {LogoutComponent} from "./authentication/logout.component";
import {UserModule} from "./user/user.module";
import {IsLoggedInGuard} from "./authentication/is-logged-in.guard";
import {AdminComponent} from "./admin/admin.component";


// Application Guards
const APP_GUARDS = [
  AuthenticationGuard,
  IsLoggedInGuard
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ // import Angular's modules
    BrowserModule,
    SharedModule,
    UserModule,
    app_routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    NoContentComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_RESOLVER_PROVIDERS,
    AppService,
    AuthenticationService,
    APP_GUARDS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppService) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

