import { TestBed } from '@angular/core/testing';

import { ServiceHw8Service } from './service-hw8.service';

describe('ServiceHw8Service', () => {
  let service: ServiceHw8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHw8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
