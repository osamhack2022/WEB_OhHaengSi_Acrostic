import { get, patch } from "./common";
import { Soldier } from "./soldiers";

export interface Room {
  id: number;
  name: string;
  members: Soldier[];
}

export interface RoomSummary {
  absence: number;
  absence_reasons: [string, number][];
  current: number;
  total: number;
}

export interface RoomResponse {
  room: Room;
  summary: RoomSummary;
}

export const getRooms = () => get<Room[]>("/room");

export const getRoom = (id: number) => get<RoomResponse>(`/room/${id}`);

export const patchRoom = (id: number, data: any) =>
  patch<Room>(`/room/${id}`, data);
