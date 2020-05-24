<template>
  <v-dialog v-model="shouldShow" max-width="500px">
    <resource-create-and-update-form
      :item="variable"
      @updated="close()"
      @created="close()"
      @cancel="close()"
    ></resource-create-and-update-form>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { IResource } from "@/store/customStore/types/types";
  import ResourceCreateAndUpdateForm from "@/components/createAndUpdateForms/ResourceCreateAndUpdateForm.vue";

  @Component<ResourceCreateAndUpdateDialog>({
    components: {
      ResourceCreateAndUpdateForm,
    },
    props: {
      variable: Object,
      value: Boolean,
    },
  })
  // ToDo: implement mixin or parent to handle standard functions like closing and shouldShow
  export default class ResourceCreateAndUpdateDialog extends Vue {
    value: boolean;
    variable: IResource;

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
