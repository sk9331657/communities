import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

import { SuccessComponent } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ SuccessComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
