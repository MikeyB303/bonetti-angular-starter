import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogEntry } from '../classes/log-entry';
import { LogPublisher } from '../classes/log-publisher';
import { LogLevel } from '../enums/log-level';
import { LogPublishersService } from './log-publishers.service';

@Injectable()
export class LoggingService {
  level: LogLevel;
  logWithDate: boolean;
  publishers: LogPublisher[];

  constructor(private logPublishersService: LogPublishersService) {
    this.level = environment.logging.level;
    this.logWithDate = environment.logging.logWithDate;
    this.publishers = this.logPublishersService.publishers;
  }

  debug(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Debug, optionalParams);
  }

  info(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Info, optionalParams);
  }

  warn(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Warn, optionalParams);
  }

  error(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Error, optionalParams);
  }

  fatal(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Fatal, optionalParams);
  }

  log(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.All, optionalParams);
  }

  private writeToLog(message: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = message;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      console.log(entry.buildLogString());
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return (
      (level >= this.level && level !== LogLevel.Off) ||
      this.level === LogLevel.All
    );
  }
}
