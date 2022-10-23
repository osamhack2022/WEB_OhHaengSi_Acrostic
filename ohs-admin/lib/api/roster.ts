import { get, post } from "./common";

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

export const getRosterForm = (id: number) =>
  get<RosterForm>(`/roster/form/${id}`);

export const createRosterForm = (data: any) => post("/roster/form", data);
