import {NgModule} from "@angular/core";
import {SharedModule} from "./shared/shared.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {EasyfillModule} from "./easyfill/easyfill.module";
import {LoggedInGuard} from "../logged-in.guard";
import {user_routing} from "./user.routing";
import {UserComponent} from "./user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EasyfillComponent} from "./easyfill/easyfill.component";
import {TestComponent} from "./test.component";

@NgModule({
  imports: [
    SharedModule,
    DashboardModule,
    EasyfillModule,
    user_routing
  ],
  declarations: [
    UserComponent,
    TestComponent
  ],
  providers: [
    LoggedInGuard
  ]
})
export class UserModule { }
