import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Title} from '@angular/platform-browser';
import { CountryListComponent } from './country-list.component';

  describe('', () => {
    let fixture: ComponentFixture<CountryListComponent>;
    let component: CountryListComponent;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          HttpClientModule
        ],
        declarations: [ CountryListComponent ],
        providers: [ ]
      }).compileComponents().then(() => {
        fixture = TestBed.createComponent(CountryListComponent);
        component = fixture.componentInstance;
      });
    }));

    it('The list clicked success', async(() =>  {
      spyOn(component, 'onCountryClicked');
      const mockResponse = {
        data: [
          { id: 0, name: 'Afghanistan', capital: 'Kabul' },
          { id: 1, name: 'Albania', capital: 'Tirana' },
          { id: 2, name: 'Algeria', capital: 'Algiers' },
        ]
      };
      component.onCountryClicked(null, mockResponse);
      fixture.whenStable().then(() => {
        expect(component.onCountryClicked).toHaveBeenCalled();
      });
  }));
});
