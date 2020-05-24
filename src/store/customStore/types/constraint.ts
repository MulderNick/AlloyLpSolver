import {IConstraint, IProperty, IResource} from "@/store/customStore/types/types";

export default class Constraint implements IConstraint {
  constraintSource: IProperty | IResource;
  max: number;
  min: number;
  get name() {
    return this.constraintSource.name;
  }

  constructor(constraintSource: IProperty | IResource, min: number, max: number) {
    this.constraintSource = constraintSource;
    this.min = min;
    this.max = max;
  }
}
