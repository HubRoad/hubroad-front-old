/* Import Modules */
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

/* Import Components */
import {ProfilePanelComponent} from "./profile-panel.component";
import {routing} from "../app.routing";

/* Import Services */


/* Module Definition */
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ ProfilePanelComponent ],
  exports: [ ProfilePanelComponent ],
  providers: []
})
export class CoreModule { }
