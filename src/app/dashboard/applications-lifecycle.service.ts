import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ApplicationHR} from "./ApplicationHR";

@Injectable()
export class ApplicationsLifeCycleService {

  private applicationsAPIUrl = 'app/api_applications';

    constructor(private  http: Http) { }

  getApplications(): Promise<ApplicationHR[]> {
    return this.http.get(this.applicationsAPIUrl)
      .toPromise()
      .then(resp => resp.json().data as ApplicationHR[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
