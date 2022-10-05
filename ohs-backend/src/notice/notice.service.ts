import { Inject, Injectable } from '@nestjs/common';
import { Between, Raw, Repository } from 'typeorm';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { Notice } from './entities/notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @Inject('NOTICE_REPOSITORY')
    private readonly noticeRepo: Repository<Notice>,
  ) {}

  async create(createNoticeDto: CreateNoticeDto, writerId: number) {
    return await this.noticeRepo.save({ ...createNoticeDto, writerId });
  }

  async findAll(query: any = {}) {
    let dbQuery = { ...query };
    if (dbQuery.createdAt) {
      dbQuery.createdAt = Raw(
        (alias) =>
          `${alias} between date(:createdAt) and date(:createdAt) + INTERVAL 1 DAY`,
        { createdAt: dbQuery.createdAt },
      );
    }
    return {
      query,
      items: await this.noticeRepo.find({
        where: dbQuery,
        order: { createdAt: 'DESC' },
      }),
    };
  }

  async findOne(id: number) {
    return await this.noticeRepo.findOne({ where: { id } });
  }

  async update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return await this.noticeRepo.update({ id }, updateNoticeDto);
  }

  async remove(id: number) {
    return await this.noticeRepo.delete({ id });
  }
}
