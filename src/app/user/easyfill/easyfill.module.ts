import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EasyfillComponent} from "./easyfill.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ EasyfillComponent ],
  exports: [ EasyfillComponent ]
})
export class EasyfillModule { }
