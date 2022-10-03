import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { RosterModule } from './roster/roster.module';
import { CleaningModule } from './cleaning/cleaning.module';
import { NoticeModule } from './notice/notice.module';
import { EmergencyModule } from './emergency/emergency.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RoomModule,
    RosterModule,
    CleaningModule,
    NoticeModule,
    EmergencyModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
