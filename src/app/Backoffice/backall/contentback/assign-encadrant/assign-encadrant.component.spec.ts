import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEncadrantComponent } from './assign-encadrant.component';

describe('AssignEncadrantComponent', () => {
  let component: AssignEncadrantComponent;
  let fixture: ComponentFixture<AssignEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEncadrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
