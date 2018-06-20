import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  public countries = [];
  public count;

  constructor(private dataService: DataService, private titleService: Title ) {
    /*
      A call to set Title of the App
     */
    titleService.setTitle('CountriesListApp');
    /*
       A call to our service class method to get the data from the public API
    */
    this.getCountries();
  }

  /*
      A call to our service class method to get the data from the public API
  */
  getCountries() {
    this.dataService.getCountries()
      .subscribe(
         countries => {
          this.countries = countries;
          this.count = this.countries.length;
        },
        err => {
          console.log(err);
        });
  }
}
