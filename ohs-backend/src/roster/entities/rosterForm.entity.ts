import { genProvider } from 'src/database/database.helper';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface IRosterWorkForm {
  name: string;
  requiredMember: number;
}

export interface IRosterForm {
  name: string;
  works: IRosterWorkForm[];
}

@Entity()
export class RosterForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-json')
  detail: IRosterForm[];

  @Column({
    default: false,
  })
  active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export const rosterFormProvider = genProvider(
  'ROSTER_FORM_REPOSITORY',
  RosterForm,
);
