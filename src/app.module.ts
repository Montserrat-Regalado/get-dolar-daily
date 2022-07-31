import { Module } from '@nestjs/common';
import { GetCurrencyDataService } from './api/get-currency-data/get-currency-data.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
  ],
  controllers: [],
  providers: [GetCurrencyDataService],
})
export class AppModule { }
