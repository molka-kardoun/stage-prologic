import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferwithencadrantandusersComponent } from './offerwithencadrantandusers.component';

describe('OfferwithencadrantandusersComponent', () => {
  let component: OfferwithencadrantandusersComponent;
  let fixture: ComponentFixture<OfferwithencadrantandusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferwithencadrantandusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferwithencadrantandusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
