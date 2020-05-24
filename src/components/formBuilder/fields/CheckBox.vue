<template>
  <v-checkbox
    :disabled="field.disabled"
  >

  </v-checkbox>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderCheckBox } from "@/components/formBuilder/fields/types";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,

    },
  })
  export default class CheckBox extends Vue {
    element: FormBuilderCheckBox;
  }
</script>

<style lang="scss">

</style>
