import { TestBed } from '@angular/core/testing';

import { Storage.Service.TsService } from './storage.service';

describe('Storage.Service.TsService', () => {
  let service: Storage.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storage.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
