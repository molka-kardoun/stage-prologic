import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedinternsComponent } from './acceptedinterns.component';

describe('AcceptedinternsComponent', () => {
  let component: AcceptedinternsComponent;
  let fixture: ComponentFixture<AcceptedinternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedinternsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedinternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
