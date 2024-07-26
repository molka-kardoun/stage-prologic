import { TestBed } from '@angular/core/testing';

import { ForgetpwdService } from './forgetpwd.service';

describe('ForgetpwdService', () => {
  let service: ForgetpwdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetpwdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
