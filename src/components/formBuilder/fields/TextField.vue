<template>
  <v-text-field
    type="text"
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
  import { FormBuilderTextField } from "@/components/formBuilder/fields/types";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class TextField extends Vue {
    element: FormBuilderTextField;
  }
</script>

<style lang="scss">

</style>
