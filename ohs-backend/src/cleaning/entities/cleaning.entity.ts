import { ApiProperty } from '@nestjs/swagger';
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

  @Column('date')
  targetDate: string;

  @OneToOne(() => Room, (room) => room.cleaningArea)
  inCharge: Room;

  @Column()
  @RelationId((cleaning: Cleaning) => cleaning.inCharge)
  inChargeId: number;
}

export const cleaningProviders = genProvider('CLEANING_REPOSITORY', Cleaning);

@Entity()
export class RoomCleaningSched {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne(() => Room, (room) => room.roomCleaingSchedule)
  room: Room;

  @ApiProperty()
  @Column()
  @RelationId((rcs: RoomCleaningSched) => rcs.room)
  roomId: number;

  @ApiProperty()
  @Column({ default: null })
  primaryFirst: string;

  @ApiProperty()
  @Column({ default: null })
  @ApiProperty()
  primarySecond: string;
  @Column({ default: null })
  @ApiProperty()
  primaryThird: string;

  @ApiProperty()
  @Column({ default: null })
  primaryFourth: string;

  @ApiProperty()
  @Column({ default: null })
  @ApiProperty()
  subFirst: string;

  @ApiProperty()
  @Column({ default: null })
  subSecond: string;

  @ApiProperty()
  @Column({ default: null })
  subThird: string;

  @ApiProperty()
  @Column({ default: null })
  subFourth: string;
}

export const roomCleaningSchedProvider = genProvider(
  'ROOM_CLEANING_SCHED_REPOSITORY',
  RoomCleaningSched,
);
