import { genProvider } from 'src/database/database.helper';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DataSource,
  OneToMany,
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany(() => Soldier, (solider) => solider.room)
  members: Soldier[];
}

export const roomProviders = genProvider('ROOM_REPOSITORY', Room);
