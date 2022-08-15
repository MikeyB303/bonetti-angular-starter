import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../core.module';

import { LogPublishersService } from './log-publishers.service';

describe('LogPublishersService', () => {
  let service: LogPublishersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
    service = TestBed.inject(LogPublishersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
