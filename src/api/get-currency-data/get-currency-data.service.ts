import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

@Injectable()
export class GetCurrencyDataService {
  constructor(private readonly httpService: HttpService) {}

  getCurrency(): Observable<AxiosResponse<any[]>> {
    const Headers: AxiosRequestConfig = {
      headers: {
        'Content-type': 'application/json',
        Authorization: process.env.API_KEY,
      },
    };

    const to = 'USD';
    const from = 'MXN';
    const amount = 1;
    return this.httpService.get(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      Headers,
    );
  }
}
