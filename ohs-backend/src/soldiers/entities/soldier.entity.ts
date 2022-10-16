import { ApiProperty } from '@nestjs/swagger';
import { genProvider } from 'src/database/database.helper';
import { Room } from 'src/room/entities/room.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

export enum SoldierStatus {
  PRESENCE = '열중',
  ON_DUTY = '근무',
  VACATION = '휴가',
  ETC = '기타',
}

@Entity()
export class Soldier {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  rank: number; // 1: 이병, 2: 일병, 3: 상병, 4: 병장

  @ApiProperty({ enum: ['열중', '근무', '휴가', '기타'] })
  @Column({
    type: 'enum',
    enum: SoldierStatus,
    default: SoldierStatus.PRESENCE,
    nullable: false,
  })
  status: SoldierStatus;

  @ManyToOne(() => Room, (room) => room.members)
  room: Room;

  @ApiProperty()
  @RelationId((soldier: Soldier) => soldier.room)
  @Column({ nullable: false })
  roomId: number;
}

export const soldierProviders = genProvider('SOLDIER_REPOSITORY', Soldier);
