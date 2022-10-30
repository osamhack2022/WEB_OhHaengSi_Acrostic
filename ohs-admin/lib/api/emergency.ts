import { get } from "./common";
import { Room } from "./room";

export type Emergency = {
  id: number;
  room: Room;
  roomId: number;
  createdDate: Date;
};

export const getEmergencies = () => get<Emergency[]>("/emergency");
