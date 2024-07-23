import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabComponent } from './create-lab.component';

describe('CreateLabComponent', () => {
  let component: CreateLabComponent;
  let fixture: ComponentFixture<CreateLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
