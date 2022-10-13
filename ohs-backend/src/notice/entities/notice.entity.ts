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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: NoticeType,
    default: NoticeType.NORMAL,
  })
  type: NoticeType;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.notices)
  writer: User;

  @RelationId((notice: Notice) => notice.writer)
  @Column()
  writerId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export const noticeProviders = genProvider('NOTICE_REPOSITORY', Notice);
