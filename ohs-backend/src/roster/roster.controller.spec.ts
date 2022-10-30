import { Test, TestingModule } from '@nestjs/testing';
import { RosterController } from './roster.controller';
import { RosterService } from './roster.service';

describe('RosterController', () => {
  let controller: RosterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RosterController],
      providers: [RosterService],
    }).compile();

    controller = module.get<RosterController>(RosterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
