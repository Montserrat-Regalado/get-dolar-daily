import { Module } from '@nestjs/common';
import { GetCurrencyDataService } from './api/get-currency-data/get-currency-data.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './services/task.service';
import { VenomService } from './services/venom/venom.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    HttpModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [GetCurrencyDataService, TasksService, VenomService],
})
export class AppModule {
  constructor(
    private _taskService: TasksService,
    private _venomService: VenomService,
  ) {
    this._venomService.CreateSession();
  }
}
