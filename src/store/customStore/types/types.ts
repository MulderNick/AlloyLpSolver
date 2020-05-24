export interface IState {
  properties: IProperty[],
  resources: IResource[],
  constraints: IConstraint[],
  lme: number,
}

export interface IConstraint {
  constraintSource: IProperty | IResource
  min: number,
  max: number,
  readonly name: string,
}

export interface IResource {
  id: string,
  name: string;
  premie: number,
  recovery: number,
  propertyContent: IPropertyContent[],
  readonly lmeDelta: number
  readonly netPrice: number
  getValueForProperty(property: IProperty): number
  setValueForProperty(property: IProperty, value: number): void

}

export interface IPropertyContent {
  property: IProperty,
  value: any;
}

export interface IProperty {
  id: string,
  name: string;
}
