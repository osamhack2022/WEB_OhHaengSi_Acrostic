import { get } from "./common";

export type SoliderStatusStats = {
  status: string;
  count: number;
}[];

export const getSoldierStatus = () =>
  get<SoliderStatusStats>("/stats/soldier/status");
