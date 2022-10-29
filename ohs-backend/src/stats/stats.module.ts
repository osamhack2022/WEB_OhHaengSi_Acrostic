import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { DatabaseModule } from 'src/database/database.module';
import { soldierProviders } from 'src/soldiers/entities/soldier.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [StatsController],
  providers: [StatsService, ...soldierProviders],
})
export class StatsModule {}
