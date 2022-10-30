import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { roomProviders } from './entities/room.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomService, ...roomProviders],
})
export class RoomModule {}
