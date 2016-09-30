import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {ApplicationsLifecycleComponent} from "./applications-lifecycle.component";

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ DashboardComponent, ApplicationsLifecycleComponent ],
  exports: [ DashboardComponent, ApplicationsLifecycleComponent ]
})
export class DashboardModule { }
