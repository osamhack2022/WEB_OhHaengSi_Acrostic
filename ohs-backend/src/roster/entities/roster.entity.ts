import { genProvider } from 'src/database/database.helper';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Roster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  workName: string;

  @Column()
  targetDate: Date;

  @Column()
  checked: boolean;

  @Column()
  requiredPeople: number;

  @ManyToOne(() => Soldier)
  inCharge: Soldier;
}

export const rosterProvider = genProvider('ROSTER_REPOSITORY', Roster);
