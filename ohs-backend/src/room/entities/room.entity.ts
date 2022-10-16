import { ApiProperty } from '@nestjs/swagger';
import {
  Cleaning,
  RoomCleaningSched,
} from 'src/cleaning/entities/cleaning.entity';
import { genProvider } from 'src/database/database.helper';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Room {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 500 })
  name: string;

  @ApiProperty({
    type: () => [Soldier],
  })
  @OneToMany(() => Soldier, (solider) => solider.room)
  members: Soldier[];

  @OneToOne(() => Cleaning, (cleaning) => cleaning.inCharge)
  cleaningArea: Cleaning;

  @OneToMany(() => RoomCleaningSched, (roomCleaning) => roomCleaning.room)
  roomCleaingSchedule: RoomCleaningSched;
}

export const roomProviders = genProvider('ROOM_REPOSITORY', Room);
