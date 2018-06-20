import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [DataService]
})
export class CountriesComponent implements OnInit {
  /*
    We are using Input, Output & EventEmitters to communicate amoung components
  */
  @Input() countries: any;
  public countriesList = [];
  public count;
  currentCountryValue: any;

  constructor(private dataService: DataService) {
    /*
       A call to our service class method to get the data from the public API
    */
    this.getCountries();
   }

  ngOnInit() {
  }

  currentCountry(currentCountryVal: any) {
    this.currentCountryValue = currentCountryVal;
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
        alert('Error in API call');
      });
}
}
