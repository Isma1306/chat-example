import { TestBed } from '@angular/core/testing';

import { APISocketService } from './api-socket.service';

describe('APISocketService', () => {
  let service: APISocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APISocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
