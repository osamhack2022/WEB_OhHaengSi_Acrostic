import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('soldier/status')
  getSoliderStatus() {
    return this.statsService.getSoldierStatus();
  }

  @Get('workShare')
  gerWorkShare() {
    return this.statsService.getWorkShare();
  }

  @Get('workShare/rank')
  gerWorkShareByRank() {
    return this.statsService.getWorkShareByRank();
  }
}
