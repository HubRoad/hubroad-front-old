import { Component, OnInit } from '@angular/core';
import {Application} from "typedoc";
import {ApplicationHR} from "./ApplicationHR";

@Component({
    moduleId: module.id.toString(),
    selector: 'hr-applications-lifecycle',
    templateUrl: 'applications-lifecycle.component.html',
  styleUrls: ['applications-lifecycle.component.css']
})
export class ApplicationsLifecycleComponent implements OnInit {

  mockApplications: ApplicationHR[] = [
    {id: 1, company: "Bobst", title: "title1"},
    {id: 2, company: "INSA", title: "title2"},
    {id: 3, company: "LuK", title: "title3"},
    {id: 4, company: "IIT", title: "title4"},
    {id: 5, company: "Work4", title: "title5"},
  ];

  selectedApplication: ApplicationHR;

  onSelectApplication(appli: ApplicationHR): void {
    this.selectedApplication = appli;
    this.showApplicationDetailStage(appli);
  }

  showApplicationDetailStage(appli: ApplicationHR): void {
    //GET Application detail
  }
    constructor() { }

    ngOnInit() { }

}
