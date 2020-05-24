<template>
  <div class="my-4">
    <h5>{{element.label}}</h5>
    <v-text-field
      v-for="language in element.languages"
      :key="language"
      :label="language"
      :rules="inputRules"
      :value="getValue(language)"
      @input="setValue(language, $event)"
    >
    </v-text-field>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderMultiLanguageField } from "@/components/formBuilder/fields/types";
  import { MultiLanguage } from "@/store/MultiLanguage";
  import inputRules from "@/helpers/inputRules";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class MultiLanguageField extends Vue {
    element: FormBuilderMultiLanguageField;

    get multiLanguage(): MultiLanguage {
      return this.element.value;
    }

    getValue(language: string) {
      return this.multiLanguage.getLanguage(language);
    }

    setValue(language: string, value: string) {
      const newMl = new MultiLanguage(this.multiLanguage.getValues());
      newMl.setLanguage(language, value);
      this.element.value = newMl;
    }

    // Changes functionality of input.required to only count for one field instead of all fields
    get inputRules() {
      const rules = [...this.element.inputRules];
      if (rules.includes(inputRules.required)) {
        const anyFieldHasValue = this.multiLanguage.getWithFallback();
        if (anyFieldHasValue) {
          const index = rules.indexOf(inputRules.required);
          rules.splice(index, 1);
        }
      }
      return rules;
    }
  }
</script>

<style lang="scss">

</style>

