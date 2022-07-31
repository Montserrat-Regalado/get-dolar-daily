import { Module } from '@nestjs/common';
import { GetCurrencyDataService } from './api/get-currency-data/get-currency-data.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    HttpModule,
  ],
  controllers: [],
  providers: [GetCurrencyDataService],
})
export class AppModule {}
