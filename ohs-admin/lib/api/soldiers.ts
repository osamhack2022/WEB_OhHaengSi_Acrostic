import { get, patch, post } from "./common";

export type Soldier = {
  id: number;
  name: string;
  rank: number; // 1: 이병, 2: 일병, 3: 상병, 4: 병장
  status: string;
  roomId: number;
};

export const createSoldier = (data: any) => post("/soldiers", data);

export const getSoldiers = () => get("/soldiers");

export const getSoldier = (id: number) => get(`/soldiers/${id}`);

export const patchSoldier = (id: number, data: any) =>
  patch(`/soldiers/${id}`, data);
