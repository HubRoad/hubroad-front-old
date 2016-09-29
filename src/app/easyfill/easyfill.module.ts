import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EasyfillComponent} from "./easyfill.component";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ EasyfillComponent ],
  exports: [ EasyfillComponent ]
})
export class EasyfillModule { }
