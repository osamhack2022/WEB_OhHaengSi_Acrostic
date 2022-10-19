import { genProvider } from 'src/database/database.helper';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Roster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  workName: string;

  @Column('date')
  targetDate: Date;

  @Column()
  checked: boolean;

  @Column()
  requiredPeople: number;

  @ManyToOne(() => Soldier, { nullable: true })
  inCharge: Soldier;

  @Column({ nullable: true })
  @RelationId((roster: Roster) => roster.inCharge)
  inChargeId: number;
}

export const rosterProvider = genProvider('ROSTER_REPOSITORY', Roster);
