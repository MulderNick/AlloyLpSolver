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
    FormBuilderNumberField, FormBuilderSelectField,
  } from "@/components/formBuilder/fields/types";
  import inputRules from "@/helpers/inputRules";
  import { IConstraint, IProperty, IResource } from "@/store/customStore/types/types";
  import Constraint from "@/store/customStore/types/constraint";
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
  export default class ConstraintCreateAndUpdateForm extends Vue {
    item: IConstraint;
    readonly: boolean;

    newEmptyItem() {
      return new Constraint(null, 0, 0);
    }

    getFormElements(): object {
      const constraintSourceValue = this.item ? this.item.constraintSource : null;
      const minValue = this.item ? this.item.min : 0;
      const maxValue = this.item ? this.item.max : 0;
      const fields: any = {
        constraintSource: new FormBuilderSelectField(`${this.$tc("labels.name")} *`, constraintSourceValue, this.getConstraintOptions, { inputRules: [inputRules.required] }),
        min: new FormBuilderNumberField("min *", minValue, { suffix: "%" }),
        max: new FormBuilderNumberField("max *", maxValue, { suffix: "%" }),
      };
      return fields;
    }

    get constraints(): IConstraint[] {
      return Service.state.constraints
    }

    get properties(): IProperty[] {
      return Service.state.properties;
    }

    get resources(): IResource[] {
      return Service.state.resources;
    }

    getConstraintOptions(): { text: string, value: any }[] {
      const items: any = [];
      for (const property of this.properties.filter(p => !this.constraints.some((c) => c.constraintSource.id === p.id))) {
        items.push({ text: property.name, value: property })
      }
      for (const resource of this.resources.filter(r => !this.constraints.some((c) => c.constraintSource.id === r.id))) {
        items.push({ text: resource.name, value: resource })
      }
      return items;
    }

    addItem(item: IConstraint) {
      Service.addConstraint(item);
      this.$emit("created", item);
    }

    updateItem(item: IConstraint) {
      Service.editConstraint(item);
      this.$emit("updated", item);
    }

    cancel() {
      this.$emit("cancel");
    }
  }
</script>

<style lang="scss">
</style>

