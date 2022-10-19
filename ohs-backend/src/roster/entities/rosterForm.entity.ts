import { genProvider } from 'src/database/database.helper';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('simple-json')
  detail: IRosterForm[];

  @Column()
  active: boolean;
}

export const rosterFormProvider = genProvider(
  'ROSTER_FORM_REPOSITORY',
  RosterForm,
);
