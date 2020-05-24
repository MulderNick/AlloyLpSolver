import {IProperty, IPropertyContent, IResource} from "@/store/customStore/types/types";
import newGuid from "@/helpers/guidHelper";
import {PropertyContent} from "@/store/customStore/types/propertyContent";
import {Service} from "@/store/customStore/service";

export default class Resource implements IResource {
  id: string;
  name: string;
  premie: number;
  recovery: number;
  propertyContent: IPropertyContent[] = [];
  get netPrice() {
    return (Service.state.lme + this.premie) * 100 / this.recovery;
  }
  get lmeDelta() {
    return this.netPrice - Service.state.lme;
  }

  constructor(name: string, premie: number, recovery: number, propertyContent?: IPropertyContent[]) {
    this.id = newGuid();
    this.name = name;
    this.premie = premie;
    this.recovery = recovery;
    if (propertyContent) {
      this.propertyContent = propertyContent;
    }
  }

  getValueForProperty(property: IProperty): number {
    const propertyContent = this.getPropertyContent(property);
    if (propertyContent) {
      return propertyContent.value
    }
    return 0
  }

  // todo make immutable
  setValueForProperty(property: IProperty, value: number) {
    const propertyContent = this.getPropertyContent(property);
    if (propertyContent) {
      propertyContent.value = value;
    }
    this.propertyContent = [...this.propertyContent, new PropertyContent(property, value)];
  }

  private getPropertyContent(property: IProperty) {
    return this.propertyContent.find(p => p.property.id === property.id);
  }
}
