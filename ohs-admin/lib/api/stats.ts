import { get } from "./common";

export type SoliderStatusStats = {
  status: string;
  count: number;
}[];

export const getSoldierStatus = () =>
  get<SoliderStatusStats>("/stats/soldier/status");

export type WorkShare = {
  soldier_id: number;
  soldier_name: string;
  soldier_rank: number;
  soldier_status: string;
  soldier_roomId: number;
  count: string;
}[];

export const getWorkShare = () => get<WorkShare>("/stats/workShare");


export type WorkShareByRank = {"soldier_rank": number,"count": string}[]

export const getWorkShareByRank = () => get<WorkShareByRank>('/stats/workShare/rank')