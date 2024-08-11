import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipOfferComponent } from './internship-offer.component';

describe('InternshipOfferComponent', () => {
  let component: InternshipOfferComponent;
  let fixture: ComponentFixture<InternshipOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
