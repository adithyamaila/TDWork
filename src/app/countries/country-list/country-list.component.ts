import { Country } from './../country.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  /*
    We are using Input, Output & EventEmitters to communicate amoung components
  */
  @Input() countries: any;
  @Output() countrySelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onCountryClicked(event: MouseEvent, country: any) {
    if (event) {
      this.countrySelected.emit(country);
    }
  }
}
