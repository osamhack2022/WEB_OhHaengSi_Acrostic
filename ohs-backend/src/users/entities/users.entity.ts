import { genProvider } from '../../database/database.helper';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DataSource,
  OneToMany,
} from 'typeorm';
import { Notice } from 'src/notice/entities/notice.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  rank: string;

  @OneToMany(() => Notice, (notice) => notice.writer)
  notices: Notice[];
}

export const userProviders = genProvider('USER_REPOSITORY', User);
