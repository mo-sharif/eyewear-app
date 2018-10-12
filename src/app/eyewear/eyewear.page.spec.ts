import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyewearPage } from './eyewear.page';

describe('EyewearPage', () => {
  let component: EyewearPage;
  let fixture: ComponentFixture<EyewearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyewearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyewearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
