import { Observable, of } from 'rxjs';
import { LogEntry } from './log-entry';
import { LogPublisher } from './log-publisher';

export class LogConsole extends LogPublisher {
  log(record: LogEntry): Observable<boolean> {
    console.log(record.buildLogString());
    return of(true);
  }
  clear(): Observable<boolean> {
    console.clear();
    return of(true);
  }
}
