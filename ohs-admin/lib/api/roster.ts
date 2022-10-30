import { get, patch, post } from "./common";

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

export interface IWorkMember {
  id: number;
  rosterId: number;
  name: string;
  rankName: string;
  checked: boolean;
}

export interface IRosterWork {
  name: string;
  members: IWorkMember[];
}

export interface IOrganizedRoster {
  name: string;
  works: IRosterWork[];
}

export interface IRosterResponse {
  date: string;
  roster: IOrganizedRoster[];
}

export interface IRosterListItem {
  targetDate: string;
}

export const getRosterForms = () => get<RosterForm[]>("/roster/form");

export const getRosterForm = (id: number) =>
  get<RosterForm>(`/roster/form/${id}`);

export const createRosterForm = (data: any) => post("/roster/form", data);

export const updateRosterForm = (id: number, data: any) =>
  patch(`/roster/form/${id}`, data);

export const getRoster = (date: string) =>
  get<IRosterResponse>(`/roster/${date}`);

export const getRosters = () => get<IRosterListItem[]>("/roster");

export const updateRoster = (data: any) => patch("/roster", data);

export const createRoster = async (date: string) =>
  await post(`/roster/${date}`, {});

export const activeRosterForm = (id: number) =>
  post(`/roster/form/${id}/active`, {});
