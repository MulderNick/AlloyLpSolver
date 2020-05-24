import {IConstraint, IProperty, IResource, IState} from "@/store/customStore/types/types";
import Vue from "vue";
import Store from "@/store/customStore/store";

// a custom store is currently used as vuex is to verbose for the planned scope
export abstract class Service {
  static state = Store.getState();

  static addConstraint(item: IConstraint) {
    this.state.constraints = [...this.state.constraints, item];
    this.saveState(this.state);
  }

  static editConstraint(item: IConstraint) {
    const oldItem = this.state.constraints.find((c: IConstraint) => c.constraintSource.id === item.constraintSource.id);
    const index = this.state.constraints.indexOf(oldItem);
    Vue.set(this.state.constraints, index, item);
    this.saveState(this.state);
  }

  static deleteConstraint(item: IConstraint) {
    const index = this.state.constraints.indexOf(item);
    Vue.delete(this.state.constraints, index);
    this.saveState(this.state);
  }

  static addResource(item: IResource) {
    this.state.resources = [...this.state.resources, item];
    this.saveState(this.state);
  }

  static editResource(item: IResource) {
    const oldItem = this.state.resources.find((c: IResource) => c.id === item.id);
    const index = this.state.resources.indexOf(oldItem);
    Vue.set(this.state.resources, index, item);
    this.saveState(this.state);
  }

  static deleteResource(item: IResource) {
    const index = this.state.resources.indexOf(item);
    Vue.delete(this.state.resources, index);
    this.saveState(this.state);
  }

  static addProperty(item: IProperty) {
    this.state.properties = [...this.state.resources, item];
    this.saveState(this.state);
  }

  static editProperty(item: IProperty) {
    const oldItem = this.state.properties.find((c: IProperty) => c.id === item.id);
    const index = this.state.properties.indexOf(oldItem);
    Vue.set(this.state.properties, index, item);
    this.saveState(this.state);
  }

  static deleteProperty(item: IProperty) {
    const index = this.state.properties.indexOf(item);
    Vue.delete(this.state.properties, index);
    this.saveState(this.state);
  }

  private static saveState(state: IState) {
    Store.saveState(state);
  }
}
