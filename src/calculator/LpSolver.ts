import { IConstraint, IResource } from "@/store/customStore/types/types";
import deepCopy from "@/helpers/deepCopy";
const solver = require("javascript-lp-solver");

export class LpSolver {
  static Solve(constraints: IConstraint[], variables: IResource[]) {
    const preparedConstraints = this.prepareConstraints(constraints);
    const preparedVariables = this.prepareResources(variables);

    const model = {
      "optimize": "price",
      "opType": "min",
      "constraints": preparedConstraints,
      "variables": preparedVariables,
    };
    return solver.Solve(model);
  }

  private static prepareConstraints(constraints: IConstraint[]) {
    const preparedConstraints: any = {};
    for (const constraint of constraints) {
      preparedConstraints[constraint.name] = deepCopy(constraint);;
    }
    // total constraint is needed to force the scale into percentages
    preparedConstraints["total"] = { name: "total", max: 100, min: 100 };
    return preparedConstraints;
  }

  private static prepareResources(resources: IResource[]) {
    const preparedResources: any = {};
    for (const resource of resources) {
      const preparedResources = deepCopy(resource) as any;
      preparedResources.total = 100;
      preparedResources[preparedResources.name] = 100;
      preparedResources.price = resource.netPrice;
      preparedResources[preparedResources.name] = preparedResources;
      for (const propertyContent of resource.propertyContent) {
        preparedResources[propertyContent.property.name] = propertyContent.value;
      }
    }
    return preparedResources;
  }
}
