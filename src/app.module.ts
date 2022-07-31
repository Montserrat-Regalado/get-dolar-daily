import { Module } from '@nestjs/common';
import { GetCurrencyDataService } from './api/get-currency-data/get-currency-data.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GetCurrencyDataService],
})
export class AppModule {}
