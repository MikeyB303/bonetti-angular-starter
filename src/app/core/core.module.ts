import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingService } from './services/logging.service';
import { LogPublishersService } from './services/log-publishers.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LoggingService, LogPublishersService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. It should only be imported in the AppModule.'
      );
    }
  }
}
