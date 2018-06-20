/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { HttpModule, ResponseOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('Service: DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        HttpClientModule
      ],
      providers: [DataService]
    });
  });

  /*
    A test method to check whether service is injected or available
  */
  it('should inject the service', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  /*
    A test method to check whether we get the correct data-format &
    mocking with our own data-set values
  */
  describe('getCountries()', () => {

    it('should return an Observable<Array<Country>>',
        inject([DataService], (dataService) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Afghanistan', capital: 'Kabul' },
            { id: 1, name: 'Albania', capital: 'Tirana' },
            { id: 2, name: 'Algeria', capital: 'Algiers' },
          ]
        };

        dataService.getCountries().subscribe((countries) => {
          expect(countries.length).toBe(3);
        });
    }));
  });
});
