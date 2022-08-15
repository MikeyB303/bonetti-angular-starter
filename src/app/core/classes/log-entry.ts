import { LogLevel } from '../enums/log-level';

export class LogEntry {
  entryDate: Date = new Date();
  message: string = '';
  level: LogLevel = LogLevel.Debug;
  extraInfo: any[] = [];
  logWithDate: boolean = true;

  buildLogString(): string {
    let logString: string = '';

    if (this.logWithDate) {
      logString = new Date() + ' - ';
    }

    logString += 'Type: ' + LogLevel[this.level];
    logString += ' - Message: ' + this.message;
    if (this.extraInfo.length) {
      logString += ' - Extra Info: ' + this.formatParams(this.extraInfo);
    }

    return logString;
  }

  private formatParams(params: any[]): string {
    let formattedParams: string = params.join(',');

    if (params.some(param => typeof param == 'object')) {
      formattedParams = '';

      for (let param of params) {
        formattedParams += JSON.stringify(param) + ',';
      }
    }

    return formattedParams;
  }
}
