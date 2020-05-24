<template>
  <v-text-field
    type="number"
    v-model="element.value"
    :label="element.label"
    :autofocus="element.autofocus"
    :disabled="element.disabled"
    :rules="element.inputRules"
    :suffix="element.suffix"
    regular
  >

  </v-text-field>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderNumberField } from "@/components/formBuilder/fields/types";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class NumberField extends Vue {
    element: FormBuilderNumberField;
  }
</script>

<style lang="scss">

</style>
