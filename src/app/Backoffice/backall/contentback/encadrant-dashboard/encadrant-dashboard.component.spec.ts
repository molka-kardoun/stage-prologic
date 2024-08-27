import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDashboardComponent } from './encadrant-dashboard.component';

describe('EncadrantDashboardComponent', () => {
  let component: EncadrantDashboardComponent;
  let fixture: ComponentFixture<EncadrantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncadrantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
