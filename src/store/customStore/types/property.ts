import newGuid from "@/helpers/guidHelper";
import {IProperty} from "@/store/customStore/types/types";

export default class Property implements IProperty {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = newGuid();
    this.name = name;
  }
}
