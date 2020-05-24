<template>
  <div
    class="flex-row"
  >
    <v-text-field
      type="color"
      v-model="element.value"
      :rules="element.inputRules"
      :label="element.label"
      :disabled="element.disabled"
      style="max-width: 100px;"
      regular
    ></v-text-field>
    <div class="color-example" :style="{'background-color': element.value}">
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderColorField } from "@/components/formBuilder/fields/types";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class ColorField extends Vue {
    element: FormBuilderColorField;
  }
</script>

<style lang="scss">

</style>
