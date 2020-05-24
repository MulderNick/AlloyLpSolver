<template>
  <v-select
    v-if="shouldShow"
    v-model="element.value"
    :disabled="disabled"
    :rules="element.inputRules"
    :items="sortedItems"
    :label="element.label"
    chips
    :multiple="element.multiple"
    regular
  >
    <template v-slot:selection="{ item, parent }">
      <v-chip
        v-if="item"
        label
        small
      >
          <span>
            {{ item.text }}
          </span>
      </v-chip>
    </template>
  </v-select>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderSelectField } from "@/components/formBuilder/fields/types";
  import { sortBy } from "lodash";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class SelectField extends Vue {
    element: FormBuilderSelectField;

    get items(): any[] {
      if (this.element.items instanceof Function) {
        return this.element.items();
      }
      return this.element.items;
    }

    get sortedItems() {
      return sortBy(this.items, ["text"]);
    }

    get disabled(): boolean {
      if (this.element.disabled instanceof Function) {
        return this.element.disabled();
      }
      return this.element.disabled;
    }

    get shouldShow() {
      if (!this.element.shouldShow()) {
        return false;
      }
      if (this.element.autoSelectIfOnlyOneOption && this.items.length === 1) {
        this.element.value = this.items[0].value;
        return false;
      }
      if (this.element.hideOnNoOptions && this.items.length === 0) {
        return false;
      }
      return true;
    }
  }
</script>

<style lang="scss">

</style>
