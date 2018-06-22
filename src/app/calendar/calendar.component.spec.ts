import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

});
