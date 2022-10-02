import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { RosterModule } from './roster/roster.module';
import { CleaningModule } from './cleaning/cleaning.module';
import { NoticeModule } from './notice/notice.module';
import { EmergencyModule } from './emergency/emergency.module';

@Module({
  imports: [RoomModule, RosterModule, CleaningModule, NoticeModule, EmergencyModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
