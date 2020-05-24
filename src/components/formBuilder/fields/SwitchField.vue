<template>
  <v-switch
    v-model="element.value"
    color="primary"
    :label="element.label"
    :disabled="element.disabled"
  ></v-switch>
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
  export default class SwitchField extends Vue {
    element: FormBuilderTextField;
  }
</script>

<style lang="scss">

</style>
