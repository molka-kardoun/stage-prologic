import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackallComponent } from './backall.component';

describe('BackallComponent', () => {
  let component: BackallComponent;
  let fixture: ComponentFixture<BackallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
