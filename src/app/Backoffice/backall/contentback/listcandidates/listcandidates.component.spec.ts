import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcandidatesComponent } from './listcandidates.component';

describe('ListcandidatesComponent', () => {
  let component: ListcandidatesComponent;
  let fixture: ComponentFixture<ListcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
