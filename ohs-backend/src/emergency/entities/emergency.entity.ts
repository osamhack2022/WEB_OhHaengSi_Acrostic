import { genProvider } from 'src/database/database.helper';
import { Room } from 'src/room/entities/room.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Emergency {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room)
  room: Room;

  @Column()
  @RelationId((self: Emergency) => self.room)
  roomId: number;
}

export const emergencyProvider = genProvider('EMERGENCY_REPOSITORY', Emergency);
