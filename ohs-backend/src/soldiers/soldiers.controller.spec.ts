import { Test, TestingModule } from '@nestjs/testing';
import { SoldiersController } from './soldiers.controller';
import { SoldiersService } from './soldiers.service';

describe('SoldiersController', () => {
  let controller: SoldiersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldiersController],
      providers: [SoldiersService],
    }).compile();

    controller = module.get<SoldiersController>(SoldiersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
