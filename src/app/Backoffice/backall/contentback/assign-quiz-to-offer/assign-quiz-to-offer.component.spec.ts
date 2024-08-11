import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignQuizToOfferComponent } from './assign-quiz-to-offer.component';

describe('AssignQuizToOfferComponent', () => {
  let component: AssignQuizToOfferComponent;
  let fixture: ComponentFixture<AssignQuizToOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignQuizToOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignQuizToOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
