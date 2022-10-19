import { Module } from '@nestjs/common';
import { CleaningService } from './cleaning.service';
import { CleaningController } from './cleaning.controller';
import { DatabaseModule } from 'src/database/database.module';
import {
  cleaningProviders,
  roomCleaningSchedProvider,
} from './entities/cleaning.entity';
import { roomProviders } from 'src/room/entities/room.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [CleaningController],
  providers: [
    CleaningService,
    ...cleaningProviders,
    ...roomProviders,
    ...roomCleaningSchedProvider,
  ],
})
export class CleaningModule {}
