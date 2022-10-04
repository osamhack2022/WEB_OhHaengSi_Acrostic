import { genProvider } from '../../database/database.helper';
import { Entity, Column, PrimaryGeneratedColumn, DataSource } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  rank: string;
}

export const userProviders = genProvider("USER_REPOSITORY", User);