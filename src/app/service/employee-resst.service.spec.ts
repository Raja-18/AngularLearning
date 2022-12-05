import { TestBed } from '@angular/core/testing';

import { EmployeeResstService } from './employee-resst.service';

describe('EmployeeResstService', () => {
  let service: EmployeeResstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeResstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
