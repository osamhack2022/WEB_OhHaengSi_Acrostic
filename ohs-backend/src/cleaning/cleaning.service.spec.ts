import { Test, TestingModule } from '@nestjs/testing';
import { roomProviders } from 'src/room/entities/room.entity';
import { CleaningService } from './cleaning.service';
import { cleaningProviders } from './entities/cleaning.entity';

describe('CleaningService', () => {
  let service: CleaningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CleaningService, ...cleaningProviders, ...roomProviders],
    }).compile();

    service = module.get<CleaningService>(CleaningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create a new monthly schedule', async () => {
    const schedule = await service.getBarrackCleaningSchedule();
    console.log(schedule);
    expect(schedule).toBeDefined();
  });
});
