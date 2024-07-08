import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbComponent } from './cardb.component';

describe('CardbComponent', () => {
  let component: CardbComponent;
  let fixture: ComponentFixture<CardbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
