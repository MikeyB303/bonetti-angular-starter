import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CoreModule } from '../core.module';
import { LogLevel } from '../enums/log-level';

import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  let service: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
    service = TestBed.inject(LoggingService);
    spyOn(window.console, 'log');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should print a log message to the console', () => {
    service.log('log');
    expect(window.console.log).toHaveBeenCalled();
  });
});
