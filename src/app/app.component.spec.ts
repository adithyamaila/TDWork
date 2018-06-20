import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from '../app/services/data.service';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Title} from '@angular/platform-browser';

describe('AppComponent', () => {
  let userService: Title;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule
      ],
      providers: [
        DataService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('Page title Should be Account', () => {
    userService = TestBed.get(Title);
    expect(userService.getTitle()).toBe('CountriesListApp');
  });
  /*
  it(`should have as title 'CountriesListApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CountriesListApp');
  }));
  */
});
