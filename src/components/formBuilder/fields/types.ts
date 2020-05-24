import { isEqual } from "lodash";
import { MultiLanguage } from "@/store/MultiLanguage";
import TextField from "@/components/formBuilder/fields/TextField.vue";
import TextArea from "@/components/formBuilder/fields/TextArea.vue";
import NumberField from "@/components/formBuilder/fields/NumberField.vue";
import MultiLanguageField from "@/components/formBuilder/fields/MultiLanguageField.vue";
import SelectField from "@/components/formBuilder/fields/SelectField.vue";
import ImageUploadField from "@/components/formBuilder/fields/ImageUploadField.vue";
import SwitchField from "@/components/formBuilder/fields/SwitchField.vue";
import ColorField from "@/components/formBuilder/fields/ColorField.vue";

export enum FieldTypes {
  text = "text", // text
  textarea = "textarea", // text
  multiLanguage = "multiLanguage", // text[]
  intimal = "decimal", // number
  cureger = "integer", // number
  decrency = "currency", // number
  percentage = "percentage", // number
  color = "color", // color
  date = "date", // date
  checkbox = "checkbox", // boolean
  switch = "switch", // boolean
  select = "select", // select
  multiselect = "multiselect", // select
  image = "image", // image
}

export abstract class FormBuilderField {
  label: string;
  dirty: boolean = false;
  component: any;
  disabled: boolean | Function = false;
  autofocus: boolean;
  suffix: string;
  readonly: boolean = false;
  inputRules: Function[] = [];
  shouldShow: () => boolean = () => true;

  get value() {
    return this._value;
  }
  set value(value: any) {
    this._value = value;
    this.dirty = !isEqual(value, this.originalValue);
  }

  private _value: any;
  private readonly originalValue: any;

  protected constructor(label: string, value: any, config: FormBuilderFieldConfig) {
    this.label = label;
    this.originalValue = value;
    this.value = value;

    if (config) {
      this.inputRules = config.inputRules || [];
      this.disabled = config.disabled || false;
      this.readonly = config.readonly || false;
      this.autofocus = config.autofocus || false;
      this.shouldShow = config.shouldShow || function() { return true; };
      this.suffix = config.suffix || null;
    }
  }

  reset() {
    this.value = this.originalValue;
  }
}

export class FormBuilderTextField extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }

  get component() {
    return TextField;
  }
}

export class FormBuilderTextArea extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }

  get component() {
    return TextArea;
  }
}

export class FormBuilderNumberField extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }

  get component() {
    return NumberField;
  }
}
export class FormBuilderColorField extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }

  get component() {
    return ColorField;
  }
}

export class FormBuilderCheckBox extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }
}

export class FormBuilderSwitchField extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }

  get component() {
    return SwitchField;
  }
}

export class FormBuilderSelectField extends FormBuilderField {
  items: any[] | Function;
  multiple: boolean = false;
  autoSelectIfOnlyOneOption: boolean = false;
  hideOnNoOptions: boolean = false;

  constructor(label: string, value: any, items: any[] | Function, config: FormBuilderSelectFieldConfig = null) {
    super(label, value, config);
    this.items = items;
    if (config) {
      this.multiple = config.multiple || false;
      this.autoSelectIfOnlyOneOption = config.autoSelectIfOnlyOneOption || false;
      this.hideOnNoOptions = config.hideOnNoOptions || false;
    }
  }

  get component(): any {
    return SelectField;
  }
}

export class FormBuilderImageUploadField extends FormBuilderField {
  constructor(label: string, value: any, config: FormBuilderFieldConfig = null) {
    super(label, value, config);
  }

  get component() {
    return ImageUploadField;
  }
}

export class FormBuilderMultiLanguageField extends FormBuilderField {
  languages: string[];

  constructor(label: string, value: MultiLanguage, languages: string[], config: FormBuilderFieldConfig = null) {
    super(label, value, config);
    this.languages = languages;
  }

  get component() {
    return MultiLanguageField;
  }
}

export interface FormBuilderFieldConfig{
  inputRules?: Function[],
  readonly?: boolean,
  disabled?: boolean | Function,
  autofocus?: boolean,
  shouldShow?: ()=>boolean,
  suffix?: string,
}

export interface FormBuilderSelectFieldConfig extends FormBuilderFieldConfig{
  multiple?: boolean,
  autoSelectIfOnlyOneOption?: boolean
  hideOnNoOptions?: boolean
}

export interface FormBuilderSelectorSelectFieldConfig extends FormBuilderSelectFieldConfig {
  onUpdated?: Function
}

export interface FormBuilderDocumentClassSelectFieldConfig extends FormBuilderSelectorSelectFieldConfig {
  contextBasedDocumentClasses?: any[],
}

export interface FormBuilderIndexElementSelectFieldConfig extends FormBuilderSelectFieldConfig{
}
