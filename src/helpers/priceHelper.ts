import { IResource } from "@/store/customStore/types/types";

// These functions are deprecated and can be removed after a refactor
// the functions which are available on the variable object should be used instead
export class PriceHelper {
  static getNetPrice(variable: IResource): number {
    return variable.netPrice;
  }

  static getLmeDelta(variable: IResource): number {
    return variable.lmeDelta;
  }
}
