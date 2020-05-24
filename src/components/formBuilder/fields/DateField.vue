<template>
  <v-text-field
    type="date"
    v-model="element.model[field.propertyName]"
  >

  </v-text-field>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderField } from "@/components/formBuilder/fields/types";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,

    },
  })
  export default class DateField extends Vue {
    element: FormBuilderField;
  }
</script>

<style lang="scss">

</style>
