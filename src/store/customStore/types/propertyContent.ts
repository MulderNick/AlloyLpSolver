import {IProperty, IPropertyContent} from "@/store/customStore/types/types";

export class PropertyContent implements IPropertyContent {
  property: IProperty;
  value: number = 0;

  constructor(property: IProperty, value: any) {
    this.property = property;
    this.value = value;
  }
}
