import { genProvider } from 'src/database/database.helper';
import { Entity, Column, PrimaryGeneratedColumn, DataSource } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}

export const roomProviders = genProvider("ROOM_REPOSITORY", Room);