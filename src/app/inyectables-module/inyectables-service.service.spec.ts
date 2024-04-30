import { TestBed } from '@angular/core/testing';

import { InyectablesServiceService } from './inyectables-service.service';

describe('InyectablesServiceService', () => {
  let service: InyectablesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyectablesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
