import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInternshipOffersComponent } from './list-internship-offers.component';

describe('ListInternshipOffersComponent', () => {
  let component: ListInternshipOffersComponent;
  let fixture: ComponentFixture<ListInternshipOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInternshipOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInternshipOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
