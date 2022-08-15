import { LogLevel } from 'src/app/core/enums/log-level';

export const environment = {
  production: false,
  logging: {
    level: LogLevel.All,
    logWithDate: true,
  },
};
