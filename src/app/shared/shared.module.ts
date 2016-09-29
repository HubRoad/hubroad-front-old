//TODO: shared module with common imports

/* Import Shared Modules */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

/* Import Shared Components */

@NgModule({
  imports: [ CommonModule ],
  declarations: [],
  exports: [ FormsModule, HttpModule, CommonModule ]
})
export class SharedModule { }
