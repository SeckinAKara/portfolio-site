import { TestBed } from '@angular/core/testing';

import { FileGrabberService } from './file-grabber.service';

describe('FileGrabberService', () => {
  let service: FileGrabberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileGrabberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
