import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInternshipOffersComponent } from './detailed-internship-offers.component';

describe('DetailedInternshipOffersComponent', () => {
  let component: DetailedInternshipOffersComponent;
  let fixture: ComponentFixture<DetailedInternshipOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedInternshipOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedInternshipOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
