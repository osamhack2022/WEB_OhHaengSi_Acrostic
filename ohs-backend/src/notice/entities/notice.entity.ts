import { ApiProperty } from '@nestjs/swagger';
import { genProvider } from 'src/database/database.helper';
import { User } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';

export enum NoticeType {
  IMPORTANT = 'important',
  NORMAL = 'normal',
}

@Entity()
export class Notice {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty({
    enum: [NoticeType.NORMAL, NoticeType.IMPORTANT],
  })
  @Column({
    type: 'enum',
    enum: NoticeType,
    default: NoticeType.NORMAL,
  })
  type: NoticeType;

  @ApiProperty()
  @Column()
  content: string;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.notices)
  writer: User;

  @ApiProperty()
  @RelationId((notice: Notice) => notice.writer)
  @Column()
  writerId: number;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export const noticeProviders = genProvider('NOTICE_REPOSITORY', Notice);
