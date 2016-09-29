/* Import Modules */
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';


/* Import Components */
import { PageTitleComponent } from './page-title.component';


/* Import Services */


/* Module Definition */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PageTitleComponent ],
  exports: [ PageTitleComponent ],
  providers: []
})
export class CoreModule { }
