import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateInternComponent } from './validate-intern.component';

describe('ValidateInternComponent', () => {
  let component: ValidateInternComponent;
  let fixture: ComponentFixture<ValidateInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
