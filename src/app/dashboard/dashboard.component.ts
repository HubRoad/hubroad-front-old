import {Component, OnInit} from '@angular/core';

@Component({
  //TODO: remove .toString() when fixed issue
    moduleId: module.id.toString(),
    selector: 'hr-dashboard',
    templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  pageTitle = "Dashboard";
    constructor() { }

    ngOnInit() { }
}
