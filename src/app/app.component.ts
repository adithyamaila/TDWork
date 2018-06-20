import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: Title ) {
    /*
      A call to set Title of the App
     */
    titleService.setTitle('CountriesListApp');
  }
}
