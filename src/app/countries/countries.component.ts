import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  /*
    We are using Input, Output & EventEmitters to communicate amoung components
  */
  @Input() countries: any;
  currentCountryValue: any;

  constructor() { }

  ngOnInit() {
  }

  currentCountry(currentCountryVal: any) {
    this.currentCountryValue = currentCountryVal;
  }
}
