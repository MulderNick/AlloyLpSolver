import Vue from "vue";
import { toArray } from "lodash";
import {
  IState,
} from "@/store/customStore/types/types";
import {baseConstraints, baseProperties, baseResources} from "@/store/customStore/prefilledStoreData";

// a custom store is currently used as vuex is to verbose for the planned scope
export default abstract class Store {
  static getState(): IState {
    return this.getSavedState() || this.getPrefilledState();
  }

  static saveState(state: IState) {
    localStorage.setItem("state", JSON.stringify(state));
  }

  private static getSavedState(): IState {
    const savedState = JSON.parse(localStorage.getItem("state")) as IState;
    if (savedState) {
      return Vue.observable(savedState)
    }
    return null;
  }

  private static getPrefilledState(): IState {
    const initialState: IState = {
      properties: toArray(baseProperties),
      resources: toArray(baseResources),
      constraints: toArray(baseConstraints),
      lme: 1850,
    };
    return Vue.observable(initialState)
  }
}
