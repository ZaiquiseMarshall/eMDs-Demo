import { TestBed } from '@angular/core/testing';

import { EndpointFactoryService } from './endpoint-factory.service';

describe('EndpointFactoryService', () => {
  let service: EndpointFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
