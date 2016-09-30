import { Component, OnInit } from '@angular/core';
import {Application} from "typedoc";
import {ApplicationHR} from "./ApplicationHR";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ApplicationsLifeCycleService} from "./applications-lifecycle.service";

@Component({
    moduleId: module.id.toString(),
    selector: 'hr-applications-lifecycle',
    templateUrl: 'applications-lifecycle.component.html',
  styleUrls: ['applications-lifecycle.component.css'],
  providers: [ ApplicationsLifeCycleService ]
})
export class ApplicationsLifecycleComponent implements OnInit {

  constructor(private applicationsService: ApplicationsLifeCycleService) { }

  ngOnInit() {
    this.getApplications();
  }

  selectedApplication: ApplicationHR;
  applications: ApplicationHR[];

  onSelectApplication(appli: ApplicationHR): void {
    this.selectedApplication = appli;
    this.showApplicationDetailStage(appli);
  }

  getApplications(): void {
    this.applicationsService.getApplications()
      .then(applis => this.applications = applis);
  }
  showApplicationDetailStage(appli: ApplicationHR): void {
    //GET Application detail
  }


}
