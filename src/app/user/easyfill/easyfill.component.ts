import { Component, OnInit } from '@angular/core';

@Component({
  //TODO: remove .toString() when fixed issue
    moduleId: module.id.toString(),
    selector: 'hr-easyfill',
    templateUrl: 'easyfill.component.html'
})
export class EasyfillComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
