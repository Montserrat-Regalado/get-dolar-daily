import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Icurrency } from '../interfaces/currency.interface';

@Injectable()
export class GetCurrencyDataService {
  constructor(private readonly httpService: HttpService) {}

  getCurrency(): Observable<AxiosResponse<Icurrency>> {
    const to = 'MXN';
    const from = 'USD';
    const amount = 1;
    const axiosConfig: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,

      headers: {
        'Content-type': 'application/json',
        apikey: 'cs49fj0RK5f3KASAjQzA87SBVx6NX2Lj',
      },
    };

    return this.httpService.request(axiosConfig);
  }
}
