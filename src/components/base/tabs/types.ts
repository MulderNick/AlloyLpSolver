import {Location} from "vue-router";

export interface ITab {
  value: string,
  label: string,
  to?: Location
  props?: any,
  component?: any,
  shouldShow?: Function,
  events?: any,
  disabled?: Function | boolean,
}
