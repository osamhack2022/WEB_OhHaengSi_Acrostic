import { Soldier } from 'src/soldiers/entities/soldier.entity';

export interface IWorkMember {
  rosterId: number;
  name: string;
  rankName: string;
  checked: boolean;
}

export interface IRosterWork {
  name: string;
  members: IWorkMember[];
}

export type IOrganizedRoster = {
  name: string;
  works: IRosterWork[];
}[];

export interface IRosterResponse {
  date: string;
  roster: IOrganizedRoster;
}
