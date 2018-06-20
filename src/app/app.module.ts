import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../app/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    CountryDetailComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
