import { TestBed } from '@angular/core/testing';

import { JuvigService } from './juvig.service';

describe('JuvigService', () => {
  let service: JuvigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuvigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
