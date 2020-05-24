<template>
  <v-form
    ref="form"
    v-model="valid"
    class="d-scrollable pa-4"
    @submit.prevent
  >
    <div>
      <component
        v-for="(element, index) in elementsToShow()"
        :key="index"
        :is="getElementComponent(element)"
        v-bind="{element}"
      ></component>
    </div>
    <div v-if="!readonly" class="flex-row" style="align-self: flex-end; align-items: flex-end;">
      <v-btn @click="cancel()">{{$t('actions.cancel')}}</v-btn>
      <v-btn :disabled="!dirty || !valid" color="primary" @click="save()">{{$t('actions.save')}}</v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderField } from "@/components/formBuilder/fields/types";
  import { some, filter } from "lodash";

  @Component<any>({
    components: {},
    props: {
      elements: Object,
      readonly: Boolean,
    },
    watch: {
      elements: {
        handler: "isSaveButtonDisabled",
        deep: true,
        immediate: true,
      },
    },
  })
  // todo add cancel button
  export default class FormBuilder extends Vue {
    elements: { [propertyName: string]: FormBuilderField };
    readonly: boolean;
    valid: boolean = false;
    dirty: boolean = false;

    getElementComponent(field: FormBuilderField) {
      return field.component;
    }

    elementsToShow() {
      return filter(this.elements, (e) => e.shouldShow());
    }

    isSaveButtonDisabled() {
      this.dirty = some(this.elements, e => e.dirty);
    }

    save() {
      this.$emit("save");
    }

    cancel() {
      this.resetAllFields();
      this.$emit("cancel");
    }

    private resetAllFields() {
      for (const elementKey in this.elements) {
        this.elements[elementKey].reset();
      }
    }
  }
</script>

<style lang="scss">
</style>
