import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { firstValueFrom, tap } from 'rxjs';
import { GetCurrencyDataService } from './../api/get-currency-data/get-currency-data.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private _getCurrency: GetCurrencyDataService) {}

  @Cron('1 * * * * *')
  async handleCron() {
    await firstValueFrom(
      this._getCurrency.getCurrency().pipe(
        tap((_) => {
          this.logger.log(_.data.info.rate);
          this.logger.debug('calling get currency');
        }),
      ),
    );
    this.logger.debug('calling get currency');
  }
}
