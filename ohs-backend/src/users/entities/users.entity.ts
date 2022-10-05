import { genProvider } from '../../database/database.helper';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DataSource,
  OneToMany,
} from 'typeorm';
import { Notice } from 'src/notice/entities/notice.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  rank: string;

  @OneToMany(() => Notice, (notice) => notice.writer)
  notices: Notice[];
}

export const userProviders = genProvider('USER_REPOSITORY', User);
