import { TestBed, inject } from '@angular/core/testing';

import { EyewearService } from './eyewear.service';

describe('EyewearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EyewearService]
    });
  });

  it('should be created', inject([EyewearService], (service: EyewearService) => {
    expect(service).toBeTruthy();
  }));
});
