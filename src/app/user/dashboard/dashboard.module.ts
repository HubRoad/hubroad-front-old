import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {ApplicationsLifecycleComponent} from "./applications-lifecycle.component";
import {ListDashboardComponent} from "./list/list-dashboard.component";
import {CalendarDashboardComponent} from "./calendar/calendar-dashboard.component";
import {AuthenticationGuard} from "../../authentication/authentication.guard";
import {dashboard_routing} from "./dashboard.routing";
import {HorizontalTimelineComponent} from "./list/horizontal-timeline/horizontal-timeline.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    dashboard_routing
  ],
  declarations: [
    DashboardComponent,
    ApplicationsLifecycleComponent ,
    ListDashboardComponent,
    CalendarDashboardComponent,
    HorizontalTimelineComponent
  ],
  exports: [
    DashboardComponent,
    ApplicationsLifecycleComponent
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class DashboardModule { }
