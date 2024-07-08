import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontallComponent } from './frontall.component';

describe('FrontallComponent', () => {
  let component: FrontallComponent;
  let fixture: ComponentFixture<FrontallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
