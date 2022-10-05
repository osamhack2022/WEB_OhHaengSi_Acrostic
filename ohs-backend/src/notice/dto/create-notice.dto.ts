import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { NoticeType } from '../entities/notice.entity';

export class CreateNoticeDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsEnum(NoticeType)
  type: NoticeType = NoticeType.NORMAL;
}
