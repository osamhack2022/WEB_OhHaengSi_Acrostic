import moment from "moment";

export function isBrowser() {
  return typeof window !== "undefined";
}

export function dateToString(date: Date | string) {
  return moment(date).format("YYYY-MM-DD");
}

export const rankNames = ["훈련병", "이등병", "일병", "상병", "병장"];
export function rankToString(rank: number) {
  return rankNames[rank];
}
