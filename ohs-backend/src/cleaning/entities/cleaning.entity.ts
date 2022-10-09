import { genProvider } from 'src/database/database.helper';
import { Room } from 'src/room/entities/room.entity';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Cleaning {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Room, (room) => room.cleaningArea)
  inCharge: Room;

  @Column()
  @RelationId((cleaning: Cleaning) => cleaning.inCharge)
  inChargeId: number;
}

export const cleaningProviders = genProvider('CLEANING_REPOSITORY', Cleaning);

@Entity()
export class RoomCleaningSched {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Room, (room) => room.roomCleaingSchedule)
  room: Room;

  @Column()
  @RelationId((rcs: RoomCleaningSched) => rcs.room)
  roomId: number;

  @Column()
  primaryFirst: string;
  @Column()
  primarySecond: string;
  @Column()
  primaryThird: string;
  @Column()
  primaryFourth: string;

  @Column()
  subFirst: string;
  @Column()
  subSecond: string;
  @Column()
  subThird: string;
  @Column()
  subFourth: string;
}

export const roomCleaningSchedProvider = genProvider(
  'ROOM_CLEANING_SCHED_REPOSITORY',
  RoomCleaningSched,
);
