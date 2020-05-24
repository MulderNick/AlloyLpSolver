<template>
  <v-dialog v-model="shouldShow" max-width="500px">
    <constraint-create-and-update-form
      :item="constraint"
      @updated="close()"
      @created="close()"
      @cancel="close()"
    ></constraint-create-and-update-form>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { IConstraint } from "@/store/customStore/types/types";
  import ConstraintCreateAndUpdateForm from "@/components/createAndUpdateForms/ConstraintCreateAndUpdateForm.vue";

  @Component<ConstraintCreateAndUpdateDialog>({
    components: {
      ConstraintCreateAndUpdateForm,
    },
    props: {
      constraint: Object,
      value: Boolean,
    },
  })
  // ToDo: implement mixin or parent to handle standard functions like closing and shouldShow
  export default class ConstraintCreateAndUpdateDialog extends Vue {
    value: boolean;
    constraint: IConstraint;

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
