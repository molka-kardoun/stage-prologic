import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentbackComponent } from './contentback.component';

describe('ContentbackComponent', () => {
  let component: ContentbackComponent;
  let fixture: ComponentFixture<ContentbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
