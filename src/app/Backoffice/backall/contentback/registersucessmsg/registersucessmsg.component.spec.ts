import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersucessmsgComponent } from './registersucessmsg.component';

describe('RegistersucessmsgComponent', () => {
  let component: RegistersucessmsgComponent;
  let fixture: ComponentFixture<RegistersucessmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersucessmsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistersucessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
