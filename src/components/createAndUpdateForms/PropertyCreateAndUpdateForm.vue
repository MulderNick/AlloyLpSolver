<template>
  <create-and-update-form
    :item="item"
    :empty-item="emptyItem"
    @created="addItem($event)"
    @updated="updateItem($event)"
    @cancel="finished($event)"
  >
    <template v-slot:fields="{props}">
      <v-text-field
        v-model="props.item.name"
        :rules="[inputRules.required]"
        label="Name *"
        regular
        class="mx-2"
      ></v-text-field>
    </template>
  </create-and-update-form>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import inputRules from "@/helpers/inputRules";
  import { IProperty, IResource } from "@/store/customStore/types/types";
  import CreateAndUpdateForm from "@/components/createAndUpdateForms/baseComponents/CreateAndUpdateForm.vue";
  import Property from "@/store/customStore/types/property";
  import {Service} from "@/store/customStore/service";

  @Component<any>({
    components: {
      CreateAndUpdateForm,
    },
    props: {
      item: {},
    },
  })
  export default class FieldCreateAndUpdateForm extends Vue {
    item: IProperty;
    emptyItem = new Property("");
    inputRules = inputRules;

    addItem(item: IResource) {
      Service.addProperty(item);
      this.finished();
    }

    updateItem(item:IResource) {
      Service.editProperty(item);
      this.finished();
    }

    finished() {
      this.$emit("finished");
    }
  }
</script>

<style lang="scss">
</style>
