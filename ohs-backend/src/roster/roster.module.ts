import { Module } from '@nestjs/common';
import { RosterService } from './roster.service';
import { RosterController } from './roster.controller';

@Module({
  controllers: [RosterController],
  providers: [RosterService]
})
export class RosterModule {}
