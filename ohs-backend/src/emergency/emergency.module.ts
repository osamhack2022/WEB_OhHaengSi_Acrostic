import { Module } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyController } from './emergency.controller';
import { DatabaseModule } from 'src/database/database.module';
import { emergencyProvider } from './entities/emergency.entity';
import { roomProviders } from 'src/room/entities/room.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [EmergencyController],
  providers: [EmergencyService, ...emergencyProvider, ...roomProviders],
})
export class EmergencyModule {}
