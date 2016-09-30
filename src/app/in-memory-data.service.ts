import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let api_users = [
      {id: 1, firstName: "Florian", lastName: "Wahl", notificationNumer: 4},
      {id: 2, firstName: "Louise", lastName: "Siaud", notificationNumer: 4},
      {id: 3, firstName: "Quentin", lastName: "Bayart", notificationNumer: 4},
      {id: 4, firstName: "Guillaume", lastName: "Boulanger", notificationNumer: 4},
    ];

    let api_applications = [
      {id: 1, company: "Bobst", title: "titleA"},
      {id: 2, company: "INSA", title: "title2"},
      {id: 3, company: "LuK", title: "title3"},
      {id: 4, company: "IIT", title: "title4"},
      {id: 5, company: "Work4", title: "title5"},
    ];

    return {api_users, api_applications};
  }
}
