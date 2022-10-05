import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { noticeProviders } from './entities/notice.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticeController],
  providers: [NoticeService, ...noticeProviders],
})
export class NoticeModule {}
