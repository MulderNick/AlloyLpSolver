import Property from "@/store/customStore/types/property";
import Resource from "@/store/customStore/types/resource";
import {PropertyContent} from "@/store/customStore/types/propertyContent";
import Constraint from "@/store/customStore/types/constraint";

export const baseProperties = {
  Fe: new Property("Fe"),
  Cu: new Property("Cu"),
  Mn: new Property("Mn"),
};

export const baseResources = {
  primair: new Resource("primair", 150, 99, [
    new PropertyContent(baseProperties.Fe, 0.11),
    new PropertyContent(baseProperties.Cu, 0),
    new PropertyContent(baseProperties.Mn, 0),
  ]),
  omwerking: new Resource("6063", 0, 97, [
    new PropertyContent(baseProperties.Fe, 0.3),
    new PropertyContent(baseProperties.Cu, 0.035),
    new PropertyContent(baseProperties.Mn, 0.05),
  ]),
  koop6063: new Resource("koop 6063", 0, 96, [
    new PropertyContent(baseProperties.Fe, 0.22),
    new PropertyContent(baseProperties.Cu, 0.024),
    new PropertyContent(baseProperties.Mn, 0.04),
  ]),
  iso: new Resource("iso", 0, 78, [
    new PropertyContent(baseProperties.Fe, 0.22),
    new PropertyContent(baseProperties.Cu, 0.024),
    new PropertyContent(baseProperties.Mn, 0.04),
  ]),
  lak: new Resource("lak", 0, 95, [
    new PropertyContent(baseProperties.Fe, 0.22),
    new PropertyContent(baseProperties.Cu, 0.024),
    new PropertyContent(baseProperties.Mn, 0.04),
  ]),
  almg: new Resource("AlMg", -225, 97, [
    new PropertyContent(baseProperties.Fe, 0.5),
    new PropertyContent(baseProperties.Cu, 0.08),
    new PropertyContent(baseProperties.Mn, 0.4),
  ]),
  Shredder: new Resource("Shredder", -225, 97, [
    new PropertyContent(baseProperties.Fe, 0.4),
    new PropertyContent(baseProperties.Cu, 0.1),
    new PropertyContent(baseProperties.Mn, 0.1),
  ]),
  sows: new Resource("sows", 0, 98.5, [
    new PropertyContent(baseProperties.Fe, 0.5),
    new PropertyContent(baseProperties.Cu, 0.09),
    new PropertyContent(baseProperties.Mn, 0.08),
  ]),
  vetdraad: new Resource("vetdraad", -165, 92, [
    new PropertyContent(baseProperties.Fe, 0.18),
    new PropertyContent(baseProperties.Cu, 0.002),
    new PropertyContent(baseProperties.Mn, 0.002),
  ]),
  velgen: new Resource("velgen", -250, 96, [
    new PropertyContent(baseProperties.Fe, 0.2),
    new PropertyContent(baseProperties.Cu, 0.05),
    new PropertyContent(baseProperties.Mn, 0.1),
  ]),
  omloop: new Resource("omloop", 0, 98, [
    new PropertyContent(baseProperties.Fe, 0.3),
    new PropertyContent(baseProperties.Cu, 0.035),
    new PropertyContent(baseProperties.Mn, 0.05),
  ]),
};

export const baseConstraints = {
  Fe: new Constraint(baseProperties.Fe, 0, 0.26),
  Cu: new Constraint(baseProperties.Cu, 0, 0.04),
  Mn: new Constraint(baseProperties.Mn, 0, 0.68),
};
