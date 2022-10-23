import moment from "moment";

export function isBrowser() {
  return typeof window !== "undefined";
}

export function dateToString(date: Date | string) {
  return moment(date).format("YYYY-MM-DD");
}
