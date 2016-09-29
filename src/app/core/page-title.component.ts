import { Component, OnInit } from '@angular/core';

@Component({
  //TODO: remove .toString() when fixed issue
  moduleId: module.id.toString(),
    selector: 'hr-page-title',
    templateUrl: 'page-title.component.html'
})
export class PageTitleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
