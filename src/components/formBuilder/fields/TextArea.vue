<template>
  <v-textarea
    type="text"
    v-model="element.value"
    :rules="element.inputRules"
    :label="element.label"
    :disabled="element.disabled"
    regular
  >

  </v-textarea>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderTextArea } from "@/components/formBuilder/fields/types";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class TextArea extends Vue {
    element: FormBuilderTextArea;
  }
</script>

<style lang="scss">

</style>
