import { Test, TestingModule } from '@nestjs/testing';
import { SoldiersService } from './soldiers.service';

describe('SoldiersService', () => {
  let service: SoldiersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoldiersService],
    }).compile();

    service = module.get<SoldiersService>(SoldiersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
