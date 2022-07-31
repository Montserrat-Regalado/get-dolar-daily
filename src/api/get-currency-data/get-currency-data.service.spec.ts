import { Test, TestingModule } from '@nestjs/testing';
import { GetCurrencyDataService } from './get-currency-data.service';

describe('GetCurrencyDataService', () => {
  let service: GetCurrencyDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCurrencyDataService],
    }).compile();

    service = module.get<GetCurrencyDataService>(GetCurrencyDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
