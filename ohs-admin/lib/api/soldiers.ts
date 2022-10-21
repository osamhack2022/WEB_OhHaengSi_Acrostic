import { post } from "./common";

export const createSoldier = (data: any) => post("/soldiers", data);
