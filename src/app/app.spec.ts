import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppService,
      AppComponent
    ]}));

  it('should have a url', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
