import moment from "moment";

export function getLastChangedTimeFromNow(time: number) {
  return moment(time).fromNow();
}
export function getLastChangedTime(time: number) {
  return moment(time).format("DD.MM.YYYY HH:mm");
}
