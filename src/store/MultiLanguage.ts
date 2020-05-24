import { i18n } from "@/lang/languageManagement";
import Vue from "vue";
import { find } from "lodash";

export class MultiLanguage {
  values: {[language: string]: string} = Vue.set(this, "values", {});

  constructor(values: {[language: string]: string}) {
    this.values = Object.assign({}, values);
  }

  getWithFallback() {
    return this.values[i18n.locale] || this.getFallbackValue();
  }

  get() {
    return this.values[i18n.locale] || "";
  }

  getLanguage(languageCode: string) {
    return this.values[languageCode];
  }

  getValues() {
    return this.values;
  }

  set(value: string) {
    Vue.set(this.values, i18n.locale, value);
  }

  setLanguage(languageCode: string, value: string) {
    Vue.set(this.values, languageCode, value);
  }

  setValues(values: {}) {
    this.values = Object.assign({}, values);
  }

  getFallbackValue() {
    return this.values["en"] || find(this.values, (v) => !!v) || "";
  }
}
