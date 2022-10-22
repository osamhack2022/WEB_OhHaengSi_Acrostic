import { get } from "./common";

export interface IRosterWorkForm {
  name: string;
  requiredMember: number;
}

export interface IRosterForm {
  name: string;
  works: IRosterWorkForm[];
}

export interface RosterForm {
  id: number;
  name: string;
  detail: IRosterForm[];
  createdAt: string;
  updatedAt: string;
  active: boolean;
}

export const getRosterForms = () => get<RosterForm[]>("/roster/form");
