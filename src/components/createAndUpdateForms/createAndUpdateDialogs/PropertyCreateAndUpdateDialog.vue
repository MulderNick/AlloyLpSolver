<template>
  <v-dialog v-model="shouldShow" max-width="500px">
    <variable-create-and-update-form
      :item="field"
      @finished="close()"
    ></variable-create-and-update-form>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { IProperty } from "@/store/customStore/types/types";
  import VariableCreateAndUpdateForm from "@/components/createAndUpdateForms/VariableCreateAndUpdateForm.vue";

  @Component<PropertyCreateAndUpdateDialog>({
    components: {
      VariableCreateAndUpdateForm,
    },
    props: {
      field: Object,
      value: Boolean,
    },
  })
  // ToDo: implement mixin or parent to handle standard functions like closing and shouldShow
  export default class PropertyCreateAndUpdateDialog extends Vue {
    value: boolean;
    field: IProperty;

    get shouldShow() {
      return this.value;
    }

    set shouldShow(value) {
      this.$emit("input", value);
    }

    close() {
      this.shouldShow = false;
    }
  }
</script>

<style lang="scss">

</style>
