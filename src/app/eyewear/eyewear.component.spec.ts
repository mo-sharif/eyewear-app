import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyewearComponent } from './eyewear.component';

describe('EyewearComponent', () => {
  let component: EyewearComponent;
  let fixture: ComponentFixture<EyewearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyewearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyewearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
