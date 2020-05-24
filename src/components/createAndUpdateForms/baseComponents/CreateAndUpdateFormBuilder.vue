<template>
  <form-builder
    class="flex-column"
    style="background-color: white; height: fit-content; padding: 10px"
    :elements="formElements"
    :readonly="readonly"
    @save="save()"
    @cancel="cancel()"
  >
  </form-builder>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import FormBuilder from "@/components/formBuilder/FormBuilder.vue";

  @Component<any>({
    components: {
      FormBuilder,
    },
    props: {
      item: Object,
      readonly: Boolean,
      newEmptyItem: Function,
      getFormElements: Function,
    },
    watch: {
      item: {
        handler: "setFormElements",
        immediate: true,
      },
    },
  })
  export default class CreateAndUpdateFormBuilder extends Vue {
    item: any | null;
    readonly: boolean;
    newEmptyItem: () => object;
    getFormElements: () => object;
    formElements: any = {};

    setFormElements() {
      this.formElements = this.getFormElements();
    }

    save() {
      if (!this.item) {
        this.addItem();
      } else {
        this.updateItem();
      }
    }

    cancel() {
      this.$emit("cancel");
    }

    addItem() {
      const item = this.newEmptyItem();
      this.setFormValues(item);
      this.$emit("created", item);
    }

    updateItem() {
      const item = Object.assign(this.newEmptyItem(), this.item);
      this.setFormValues(item);
      this.$emit("updated", item);
    }

    setFormValues(item: any) {
      for (const formElementKey in this.formElements) {
        item[formElementKey] = this.formElements[formElementKey].value;
      }
    }
  }
</script>

<style lang="scss">
  .form {
    height: fit-content;
    flex-direction: column;
    padding: 20px;
  }
</style>
