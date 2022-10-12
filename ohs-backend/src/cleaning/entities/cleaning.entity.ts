import { genProvider } from 'src/database/database.helper';
import { Room } from 'src/room/entities/room.entity';
import {
  Column,
  Entity,
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

  @Column({ default: null })
  primaryFirst: string;
  @Column({ default: null })
  primarySecond: string;
  @Column({ default: null })
  primaryThird: string;
  @Column({ default: null })
  primaryFourth: string;

  @Column({ default: null })
  subFirst: string;
  @Column({ default: null })
  subSecond: string;
  @Column({ default: null })
  subThird: string;
  @Column({ default: null })
  subFourth: string;
}

export const roomCleaningSchedProvider = genProvider(
  'ROOM_CLEANING_SCHED_REPOSITORY',
  RoomCleaningSched,
);
