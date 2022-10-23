import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { NoticeType } from '../entities/notice.entity';

export class CreateNoticeDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty({
    enum: [NoticeType.NORMAL, NoticeType.IMPORTANT],
  })
  @IsOptional()
  @IsEnum(NoticeType)
  type: NoticeType = NoticeType.NORMAL;
}
