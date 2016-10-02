import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let login = [
      {id: 1, email: "user@user.com", password: "test"},
      {id: 2, email: "test", password: "test"}
      ];

    let api_applications = [
      {id: 1, company: "Bobst", title: "titleA"},
      {id: 2, company: "INSA", title: "title2"},
      {id: 3, company: "LuK", title: "title3"},
      {id: 4, company: "IIT", title: "title4"},
      {id: 5, company: "Work4", title: "title5"},
    ];

    return {login, api_applications};
  }
}
