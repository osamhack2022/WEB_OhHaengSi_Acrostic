import { Module } from '@nestjs/common';
import { RosterService } from './roster.service';
import { RosterController } from './roster.controller';
import { DatabaseModule } from 'src/database/database.module';
import { rosterProvider } from './entities/roster.entity';
import { rosterFormProvider } from './entities/rosterForm.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [RosterController],
  providers: [RosterService, ...rosterProvider, ...rosterFormProvider],
})
export class RosterModule {}
