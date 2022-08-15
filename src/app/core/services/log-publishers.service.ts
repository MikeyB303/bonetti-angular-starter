import { Injectable } from '@angular/core';
import { LogConsole } from '../classes/log-console';
import { LogPublisher } from '../classes/log-publisher';

@Injectable()

//The purpose of this service is to provide the logging service with an array of different locations where logs can be published.
//LogConsole is provided by default. Other publishers, such as publishers for logging to a local file or a web service, can be added as long as they
//extend the LogPublisher abstract class.
export class LogPublishersService {
  publishers: LogPublisher[] = [];
  constructor() {
    this.buildPublishers();
  }

  private buildPublishers(): void {
    this.publishers.push(new LogConsole());
  }
}
