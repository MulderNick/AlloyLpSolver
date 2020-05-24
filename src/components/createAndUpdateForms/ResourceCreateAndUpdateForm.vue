<template>
  <create-and-update-form-builder
    :item="item"
    :new-empty-item="newEmptyItem"
    :get-form-elements="getFormElements"
    :readonly="readonly"
    @created="addItem($event)"
    @updated="updateItem($event)"
    @cancel="cancel($event)"
  >
  </create-and-update-form-builder>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import CreateAndUpdateFormBuilder from "@/components/createAndUpdateForms/baseComponents/CreateAndUpdateFormBuilder.vue";
  import {
    FormBuilderNumberField, FormBuilderTextField,
  } from "@/components/formBuilder/fields/types";
  import inputRules from "@/helpers/inputRules";
  import { IProperty, IResource } from "@/store/customStore/types/types";
  import Resource from "@/store/customStore/types/resource";
  import {Service} from "@/store/customStore/service";

  @Component<any>({
    components: {
      CreateAndUpdateFormBuilder,
    },
    props: {
      item: Object,
      readonly: Boolean,
    },
  })
  export default class ResourceCreateAndUpdateForm extends Vue {
    item: IResource;
    readonly: boolean;

    newEmptyItem() {
      return new Resource("", 0, 0);
    }

    getFormElements(): object {
      const nameValue = this.item ? this.item.name : "";
      const premieValue = this.item ? this.item.premie : 0;
      const recoveryValue = this.item ? this.item.recovery : 0;
      const fields: any = {
        name: new FormBuilderTextField(`${this.$tc("labels.name")} *`, nameValue, { inputRules: [inputRules.required] }),
        premie: new FormBuilderNumberField("Premie *", premieValue, { suffix: "€" }),
        recovery: new FormBuilderNumberField("Recovery *", recoveryValue, { suffix: "%" }),
      };
      // addPropertyFields
      this.properties.map(p => {
        const propertyValue = this.item ? this.item.premie : 0;
        fields[p.name] = new FormBuilderNumberField(p.name, propertyValue, { suffix: "%" });
      });
      return fields;
    }

    get properties(): IProperty[] {
      return Service.state.properties;
    }

    addItem(item: IResource) {
      this.addPropertiesToItem(item);
      Service.addResource(item);
      this.$emit("created", item);
    }

    updateItem(item: IResource) {
      this.addPropertiesToItem(item);
      Service.editResource(item);
      this.$emit("updated", item);
    }

    cancel() {
      this.$emit("cancel");
    }

    addPropertiesToItem(item: IResource) {
      for (const property of this.properties) {
        const value = (<any>item)[property.name] as number;
        item.setValueForProperty(property, value);
      }
    }
  }
</script>

<style lang="scss">
</style>
